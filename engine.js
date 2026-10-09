/* Original deterministic game rules, in logical 400 × 640 coordinates. */
(function(root){
'use strict';
const CONFIG={gravity:650,levels:30,startX:200,startY:550,plateY:300};
class JellyEngine{
 constructor(){this.newGame()}
 newGame(){this.level=1;this.score=0;this.lives=3;this.combo=0;this.time=0;this.message='Przesuń od żelki w górę';this.resetBall()}
 resetBall(){this.x=200;this.y=550;this.vx=0;this.vy=0;this.flying=false;this.cooldown=0}
 get ended(){return this.lives<=0||this.level>CONFIG.levels}
 get radius(){return Math.max(31,62-(this.level-1))}
 plate(t=this.time){return 200+Math.sin(t*(.65+Math.min(this.level,30)*.035))*Math.min(120,48+this.level*3)}
 velocity(dx,dy){return {x:Math.max(-250,Math.min(250,dx*2.8)),y:-Math.max(590,Math.min(770,Math.abs(dy)*3))}}
 launch(dx,dy){if(this.ended||this.flying||this.cooldown>0||dy>-20)return false;let v=this.velocity(dx,dy);this.vx=v.x;this.vy=v.y;this.flying=true;this.message='Celuj w środek!';return true}
 step(dt){if(this.ended)return 0;this.time+=dt;if(this.cooldown>0){this.cooldown=Math.max(0,this.cooldown-dt);if(!this.cooldown)this.resetBall();return 0}if(!this.flying)return 0;
 const oldY=this.y;this.x+=this.vx*dt;this.y+=this.vy*dt+.5*650*dt*dt;this.vy+=650*dt;
 if(this.vy>0&&oldY<=300&&this.y>=300){const alpha=Math.max(0,Math.min(1,(300-oldY)/(this.y-oldY))),ix=this.x-this.vx*dt*(1-alpha),d=Math.abs(ix-this.plate(this.time-dt*(1-alpha)));
 if(d<=this.radius-13){this.combo++;const points=(d<=12?150:60)+Math.min(this.combo,10)*10;this.score+=points;this.level++;this.x=ix;this.y=300;this.flying=false;this.cooldown=.8;this.message=d<=12?'IDEALNIE! +'+points:'Trafienie! Seria '+this.combo;return 1}}
 if(this.y>670||this.x<-50||this.x>450){this.lives--;this.combo=0;this.flying=false;this.cooldown=.8;this.message='Pudło — spróbuj ponownie';return -1}return 0}
 snapshot(){return {level:this.level,score:this.score,lives:this.lives,combo:this.combo,time:this.time}}
 restore(v){if(!v||!Number.isInteger(v.level)||v.level<1||v.level>30||!Number.isInteger(v.lives)||v.lives<1||v.lives>3||!Number.isInteger(v.score)||v.score<0||!Number.isFinite(v.time)||v.time<0)return false;this.level=v.level;this.score=v.score;this.lives=v.lives;this.combo=Number.isInteger(v.combo)?Math.max(0,Math.min(30,v.combo)):0;this.time=v.time;this.resetBall();return true}
}
root.JellyEngine=JellyEngine;root.JellyConfig=CONFIG;if(typeof module!=='undefined')module.exports={JellyEngine,CONFIG};
})(typeof globalThis!=='undefined'?globalThis:this);

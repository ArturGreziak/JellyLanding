# Jelly Landing — raport weryfikacji

Data: 2026-10-09.

## Zakres

Oddzielny Android Studio w Kotlinie i oddzielny Web/GitHub Pages. Mechanika Jelly Landing zastępuje Word Search z pierwszego szablonu; kategorie słów, React Native, Expo i serwer NestJS nie są wymaganiami tej gry. Drugi załącznik wskazuje natywny projekt Kotlin z AdMob/UMP — tę technologię zastosowano dla Androida. Grafika jest oryginalna i rysowana programowo.

## Wykonane sprawdzenia

| Sprawdzenie | Wynik |
|---|---|
| `node --check engine.js` oraz `node --check game.js` | OK |
| Test przejścia 30 poziomów z poprawnym przewidywaniem ruchu talerza | OK — wszystkie poziomy są osiągalne |
| Trafienie w środek i wzrost punktów | OK |
| Pudła, utrata trzech żyć, koniec gry | OK |
| Odrzucenie drugiego rzutu podczas lotu i gestu w dół | OK |
| Restart i walidacja zapisu silnika Web | OK |
| Atrapa DOM: start, zdarzenia pointer, pudło, zapis | OK |
| Atrapa DOM: pauza, wznowienie, tło, menu, Continue, restart | OK |
| XML Manifest/zasoby Android | Poprawna składnia XML |
| Gradle wrapper JAR | Integralny ZIP i rzeczywista klasa GradleWrapperMain |
| Statyczna inspekcja Kotlin/manifestu/Gradle | Wykonana; nie zastępuje kompilacji |
| Kompilacja Android i JUnit Kotlin | Zablokowana — brak Android SDK, Gradle pobierany przez JVM zwraca UnknownHostException dla services.gradle.org |
| APK/AAB | Nie utworzono |
| Wygląd, gesty i konsola prawdziwej przeglądarki | Nie zweryfikowano — odmowa dostępu przeglądarki do lokalnego URL |
| Reklamy i formularze UMP na Androidzie | Nie wykonano — brak emulatora/SDK |

Testy JavaScript wykonano w Node. Atrapa DOM nie jest przeglądarką i nie pozwala potwierdzić renderowania, rzeczywistego localStorage, dźwięku, wibracji ani dotyku.

W przeglądzie poprawiono możliwość uruchomienia równoległych pętli animacji przy szybkim wznowieniu Web, obsługę błędnych wartości zapisu Android oraz przewijanie ekranów menu na małych telefonach. Android ma pause/resume, niszczenie banneru i dźwięku, blokadę jednoczesnych reklam, nagrodę wyłącznie w callbacku SDK i ograniczenie żądań reklam przez UMP.

## Kontrola konieczna na komputerze/telefonie

1. Android: Gradle Sync, `:app:assembleDebug :app:testDebugUnitTest`; naprawić ewentualne błędy rzeczywistego builda przed publikacją.
2. Rozgrywka: gest krótki/długi, ruch talerza, punktacja, trzy pudła, 30 poziomów, koniec i zwycięstwo.
3. Pauza, powrót do tła, ubijanie procesu w trakcie rzutu, Continue, usunięcie zapisu z potwierdzeniem.
4. Android API 24 i API 36, mały ekran, duża czcionka systemowa, telefon i tablet.
5. Offline: brak reklam nie blokuje rozgrywki.
6. AdMob: banner osobno od gry, interstitial tylko na przejściu i po ograniczeniu częstotliwości; rewarded daje życie tylko za nagrodzony film, brak nagrody po zwykłym zamknięciu.
7. UMP: formularz regionu, cofnięcie/zmiana zgody, Privacy Options, brak żądań reklam bez uprawnienia.
8. Web: otworzyć index.html i wersję pod podścieżką GitHub Pages; sprawdzić telefon, mysz, klawiaturę, zmianę rozmiaru, pauzę w tle, zapis po odświeżeniu i konsolę.
9. Uzupełnić publiczną politykę prywatności i identyfikatory produkcyjne dopiero przed wydaniem; utworzyć własny podpis.

Zrzuty ekranu do Google Play należy wykonać z rzeczywistej aplikacji po uruchomieniu. Nie dołączono fikcyjnych screenshotów ani informacji o nieprzeprowadzonych testach.

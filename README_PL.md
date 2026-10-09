# Jelly Landing — Web / GitHub Pages

Osobna implementacja HTML/CSS/JavaScript. Nie jest WebView w Androidzie. Nie zawiera AdMob ani zależności Gradle. 30 poziomów, 3 życia, rekord, bonus za środek i serię, zapis lokalny, pauza, restart, tutorial, dźwięki i opcjonalna wibracja.

## Szybki start

1. Rozpakuj ZIP.
2. Otwórz `index.html` w Chrome lub Edge. Gra nie wymaga instalowania pakietów, konta ani internetu. Przechowywanie zapisu pod lokalnym `file://` może różnić się między przeglądarkami.
3. Kliknij `Nowa gra`. Dotknij żelki i przeciągnij w górę oraz w wybranym kierunku. Puść palec. Talerz nadal porusza się podczas lotu.
4. Klawiatura: strzałki w lewo/prawo zmieniają kierunek, w górę/dół siłę, Spacja rzuca, Escape otwiera pauzę.
5. Zapis następuje po rzucie i przy pauzie. Po zamknięciu strony podczas lotu możesz powtórzyć ten rzut. Gra pauzuje przy ukryciu karty. Rekord i ustawienia są przechowywane w tej przeglądarce; bez dostępnego localStorage gra działa bez trwałego zapisu.

Opcjonalny lokalny serwer, w folderze gry:

```sh
python -m http.server 8000
```

Otwórz `http://localhost:8000`.

## GitHub Pages — krok po kroku

1. Utwórz repozytorium na GitHub.
2. Wybierz `Add file > Upload files`.
3. Wgraj `index.html`, `style.css`, `engine.js`, `game.js` do głównego folderu repozytorium. Nie wgrywaj ZIP-a zamiast plików.
4. Kliknij `Commit changes`.
5. Otwórz `Settings > Pages > Build and deployment`.
6. W `Source` wybierz `Deploy from a branch`.
7. Wybierz gałąź `main` i folder `/(root)`, następnie `Save`.
8. Poczekaj na zakończenie publikacji i otwórz adres pokazany przez GitHub.

Ścieżki assetów są względne, więc działają również pod nazwą repozytorium w URL. Nic nie zostało za Ciebie opublikowane.

## Zmiana parametrów

`engine.js`: grawitacja, liczba poziomów, rozmiar i ruch talerza, siła rzutu, punktacja.
`game.js`: menu, rysowanie, dźwięk, sterowanie, zapis.
`style.css`: kolory, wymiary, układ przycisków.

## Weryfikacja

Testy Node:

```sh
node --check engine.js
node --check game.js
node tests/engine.test.cjs
node tests/ui.test.cjs
```

Testy logiki i testy z atrapą DOM przeszły. Test DOM nie jest testem renderowania w przeglądarce. Dostęp do lokalnej strony w przeglądarce został odrzucony; wygląd, audio i rzeczywiste gesty wymagają sprawdzenia u Ciebie. Szczegóły: `TEST_REPORT_PL.md`.

Wersja Web nie wysyła danych do serwera twórcy i nie ma reklam. Po publikacji GitHub może przetwarzać standardowe dane związane z hostingiem. Pomyśl o informacji prywatności odpowiedniej dla wybranego hostingu.

Punkt powrotu: gotowe pliki Web; następnym krokiem jest otwarcie `index.html`, sprawdzenie sterowania i publikacja GitHub Pages.

# Wanda von Bremen Photography Portfolio

Ein modernes, interaktives Portfolio für Fotografin Wanda von Bremen, gebaut mit React und Tailwind CSS.

## Features

- Interaktive Bildergalerie mit Maus-Tracking-Effekt
- Einzigartiger Canvas-Eraser-Effekt für das Holisis-Projekt
- Responsive Design für alle Geräte
- Optimierte Bildladung und Performance
- Lightbox-Galerie für Projektansichten

## Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

## Installation

1. Repository klonen oder Dateien herunterladen:
```bash
git clone [repository-url]
cd wanda-portfolio
```

2. Dependencies installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Für Produktions-Build:
```bash
npm run build
```

## Projektstruktur

```
wanda-portfolio/
├── src/
│   ├── components/         # Wiederverwendbare Komponenten
│   │   ├── Layout/        # Layout-bezogene Komponenten
│   │   ├── Gallery/       # Galerie-Komponenten
│   │   ├── Holisis/      # Holisis-spezifische Komponenten
│   │   └── Contact/       # Kontakt-Komponenten
│   ├── pages/             # Haupt-Seitenkomponenten
│   └── styles/            # Globale Styles
├── public/
│   └── wanda/            # Bilder und Assets
└── [Konfigurationsdateien]
```

## Spezielle Funktionen

### Interaktive Galerie
Die Homepage nutzt einen speziellen Maus-Tracking-Effekt, der Bilder basierend auf der Mausposition ändert.

### Holisis Canvas-Effekt
Das Holisis-Projekt verwendet einen benutzerdefinierten Canvas-Eraser-Effekt, der es Besuchern ermöglicht, durch die Seiten zu "wischen".

## Development

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Erstellt den Production-Build
- `npm run preview` - Vorschau des Production-Builds

## Technologie-Stack

- React
- Vite
- Tailwind CSS
- React Router
- PostCSS
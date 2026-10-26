# Birthday Surprise (React + Vite)

## Run it
```bash
npm install
npm run dev        # open the local link it prints
```

## Build for hosting
```bash
npm run build      # creates the /dist folder
```
Upload the contents of `/dist` to Netlify, Vercel, GitHub Pages, etc. (or drag the folder onto netlify.com/drop).

## Where to edit things
| What | File |
|---|---|
| Name, birthdate (password), all messages, promises, reasons, letters, last emotional note, music | `src/config.js` |
| Photos and captions | `src/data/photos.js` (images are in `src/assets/photos/`) |
| Colours, fonts, animations | `src/index.css` |
| Order of the pages | `pages` array in `src/App.jsx` |
| Each page | `src/components/` |

**Music:** put an mp3 in the `public/` folder and set `MUSIC_SRC = "./song.mp3"` in `src/config.js`.

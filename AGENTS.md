# Repository Guidelines

## Project Structure & Module Organization

This is a Vite-powered React single-page site for a Vietnam honeymoon itinerary. The application entry point is `src/main.jsx`, with page composition in `src/App.jsx`. Reusable sections and UI live in `src/components/`; keep each component in its own PascalCase `.jsx` file. Put static trip content and image metadata in `src/data/`, reusable hooks in `src/hooks/`, and global styles in `src/index.css`. Publicly served assets belong in `public/`. Utility scripts are in `scripts/`.

## Build, Test, and Development Commands

- `npm install` installs locked dependencies.
- `npm run dev` starts the local Vite development server.
- `npm run build` creates the production bundle in `dist/`; run this before submitting changes.
- `npm run preview` serves the production build locally.
- `npm run photos` runs `scripts/fetch-photos.mjs` to refresh photo data.
- `npm run qr` runs `scripts/qr.mjs` to generate a QR code.

## Coding Style & Naming Conventions

Use ES modules and React function components. Follow the existing style: two-space indentation, double quotes, semicolons, and one JSX prop per line when it improves readability. Name components and files in PascalCase (`MusicToggle.jsx`), hooks with a `use` prefix (`useScrollLock`), and ordinary data or helper modules in camelCase (`photoSearch.js`). Keep presentation-specific CSS close to its component when practical; reserve `src/index.css` for global rules, Tailwind layers, and shared utility classes.

## Testing Guidelines

No automated test framework is configured. For every UI change, run `npm run build`, then use `npm run dev` or `npm run preview` to check the affected layout, mobile responsiveness, keyboard focus, and reduced-motion behavior. If adding tests, place them beside the component as `Component.test.jsx` and add an explicit test script to `package.json`.

## Commit & Pull Request Guidelines

This checkout has no Git history, so no repository-specific commit convention can be inferred. Use concise, imperative commits such as `Add itinerary map markers`. Pull requests should explain the user-visible change, note any data or asset updates, link relevant issues, and include screenshots or a short recording for visual changes. Confirm `npm run build` succeeds before requesting review.

## Configuration & Assets

Do not commit credentials or private URLs. Keep deployment settings in `vercel.json`; document any required environment variables in the pull request and an appropriate example file.

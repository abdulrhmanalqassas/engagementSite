# Engagement Website

This is a React + Vite + Tailwind CSS project that renders the existing `index.tsx` without modifying it and deploys to GitHub Pages.

## Local Development

- Ensure Node.js 18+ is installed.
- Run `npm install`.
- Start the dev server with `npm run dev`.
- Open the printed local URL in a browser.

## Build

- Run `npm run build` to create a production build in `dist/`.
- Preview the build locally with `npm run preview`.

## GitHub Pages Deployment

This project uses `gh-pages` to publish the `dist` folder to the `gh-pages` branch.

1. Create a GitHub repository and push this project.
2. Ensure `package.json` `name` matches the repository name (used for Vite `base`).
3. Run `npm run deploy`. This will build and publish to `gh-pages`.
4. In GitHub settings, set Pages source to the `gh-pages` branch.
5. Your site will be at `https://<username>.github.io/<repo>/`.

## Base Path Configuration

The Vite `base` is computed from `package.json` `name` as `/<name>/`. This ensures asset paths work on GitHub Pages. If the repository name differs, update `package.json` `name` accordingly.

## Images

Local images `he.jpg`, `she.jpg`, `we.png`, `weKids.jpg` are displayed at the top via the gallery strip component without altering `index.tsx`.

## Notes

- The original `index.tsx` remains unchanged on disk. A build-time plugin appends an export in memory so it can be rendered by the app.
- Use `npm run typecheck` to run TypeScript checks.
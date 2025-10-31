# Repository Guidelines

## Project Structure & Module Organization
Jovida's React/Vite app lives under `src/`. Routing config sits in `src/App.jsx` and bootstraps through `src/index.jsx`. Page-level flows are grouped in `src/screens/<ScreenName>/` with paired `style.css` files. Shared UI is in `src/components/`, while SVG wrappers are under `src/icons/`. Authentication helpers stay in `src/config/auth.js`, and shared utilities like the script loader live in `src/utils/`. Static assets must be stored in `static/`, the public directory configured in `vite.config.js`; production builds emit to `dist/`.

## Build, Test, and Development Commands
Run `npm install` once per machine. Use `npm run dev` for the Vite dev server at `http://localhost:5173`. `npm run build` produces optimized assets in `dist/`. `npm run storybook` launches component previews at `http://localhost:6006`, helpful for reviewing UI states. When ready to publish Storybook, call `npm run build-storybook` to generate `storybook-static/`. Keep `docker build -t jovida-official-website:local .` handy when validating the nginx deployment container.

## Coding Style & Naming Conventions
Stick to modern React with function components, hooks, and ES modules. The codebase uses two-space indentation, double quotes for strings, and trailing semicolons—match that formatting and run your editor’s Prettier/Vite-compatible formatter before committing. Screen directories and components are PascalCase (`LoginSuccess`, `AppleButton`), CSS files mirror component names, and environment helpers expose camelCase APIs.

## Testing Guidelines
There is no Vitest/Jest harness yet, so rely on Storybook stories plus focused manual QA through `npm run dev`. When adding critical logic, create or extend Storybook stories to document states and add smoke checks that verify renders without console errors. Always finish by running `npm run build`; CI blocks on a clean production bundle.

## Commit & Pull Request Guidelines
Write concise, imperative commit titles (`Add Apple fallback copy`) and include deployment keywords when triggering pipelines (`deploy-dev`, `image-push`). Squash WIP commits locally. PRs should summarize the user-facing change, link any Jira or GitLab issue, and attach updated screenshots or Storybook URLs for visual tweaks. Before requesting review, ensure `npm run build` and `npm run storybook` both succeed and note any environment variables required for reviewers.

## Environment & Security Notes
Sensitive OAuth values belong in `.env.local` using the `VITE_*` keys referenced in `src/config/auth.js`. Never commit real client IDs or tokens. When sharing reproductions, sanitize console logs and avoid pasting access tokens into issues.

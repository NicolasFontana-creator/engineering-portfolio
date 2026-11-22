# Development Guide

Technical instructions for maintaining Engineering-Portfolio.

## Requirements

Install a Node.js version compatible with the project's Astro version. npm comes with Node.js. A code editor and Git are recommended.

## Project organization

- `src/pages/`: website pages.
- `src/components/`: reusable UI components.
- `src/data/projects.ts`: project catalog.
- `src/layouts/`: shared HTML layout.
- `src/styles/`: responsive styling.
- `public/`: public static assets.
- `.github/workflows/`: CI/CD workflows, when configured.

## Local development

From a terminal opened at the repository root:

```bash
npm install
npm run dev
```

`npm install` installs dependencies listed in `package.json`. `npm run dev` starts the Astro development server and prints the local URL.

## Production build and preview

```bash
npm run build
npm run preview
```

`npm run build` generates the production site in `dist/`. `npm run preview` launches a local server to inspect that result.

## Project updates

Edit `src/data/projects.ts` to update project metadata. Add the optional `url` property only when a project's independent repository is ready to share.

Do not upload credentials, personal data, confidential documents, or unverified experimental results.

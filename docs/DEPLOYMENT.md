# Deployment Guide

Technical instructions for deploying Engineering-Portfolio with GitHub Pages.

## Publication address

The intended URL is:

`https://nicolasfontana-creator.github.io/engineering-portfolio/`

It will become accessible after a successful first deployment.

## Astro project-site configuration

`astro.config.mjs` contains:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://NicolasFontana-creator.github.io',
  base: '/engineering-portfolio',
  output: 'static',
});
```

The `base` value must reflect the repository name.

## GitHub Pages configuration

1. Navigate to **Settings → Pages** in the repository.
2. Choose **GitHub Actions** under **Build and deployment**.
3. Confirm that a working build-and-deploy workflow exists in `.github/workflows/`.
4. Inspect the **Actions** tab for successful compilation and deployment.
5. Open the published URL and verify its navigation and layout.

Uploading an Astro source repository alone does not publish it: a deployment workflow must build and upload the generated static site.

## Deployment checks

- Confirm the Astro build completes.
- Test navigation and all external links.
- Test responsive layout and accessibility.
- Avoid committing sensitive credentials.

# Guía de publicación / Deployment Guide

Este archivo documenta el procedimiento para publicar Engineering-Portfolio mediante GitHub Pages.

## Dirección prevista

`https://nicolasfontana-creator.github.io/engineering-portfolio/`

La URL será accesible después de completar correctamente el despliegue.

## Configuración de Astro

En `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://NicolasFontana-creator.github.io',
  base: '/engineering-portfolio',
  output: 'static',
});
```

## Publicación con GitHub Pages

1. Ingresar a **Settings → Pages** en el repositorio.
2. Seleccionar **GitHub Actions** en **Build and deployment → Source**.
3. Verificar que exista un workflow de compilación y publicación en `.github/workflows/`.
4. Comprobar en **Actions** que el workflow se ejecute correctamente.
5. Abrir la URL pública y verificar navegación, enlaces y diseño responsive.

Subir el código fuente de Astro al repositorio no publica automáticamente el sitio: es necesario compilarlo y desplegar el resultado.

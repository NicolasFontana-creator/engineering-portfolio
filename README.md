# Engineering-Portfolio

Professional portfolio showcasing the academic and technical projects of an advanced Electronic Engineering student, with a focus on telecommunications, networking, and electronic systems.

## Estructura

- `src/pages`: página principal y futuras rutas.
- `src/components`: componentes reutilizables.
- `src/data`: catálogo editable de proyectos.
- `src/layouts`: estructura HTML compartida.
- `src/styles`: estilos responsive.
- `.github/workflows`: publicación automatizada en GitHub Pages.

## Desarrollo local

Requiere una versión de Node.js compatible con Astro 6.

```bash
npm install
npm run dev
```

Para compilar y revisar localmente:

```bash
npm run build
npm run preview
```

## Publicación

En GitHub, seleccioná **Settings → Pages → Build and deployment → Source: GitHub Actions**. El workflow `deploy.yml` construye y despliega el sitio al subir cambios a `main`.

## Incorporar proyectos

Actualizá `src/data/projects.ts`. Cuando cada proyecto tenga su propio repositorio, añadí su enlace en la propiedad opcional `url`. No publiques información sensible ni resultados experimentales no verificados.

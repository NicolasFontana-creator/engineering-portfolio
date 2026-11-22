# Guía de desarrollo / Development Guide

Este archivo contiene instrucciones para mantener el sitio web. No forma parte de la presentación profesional principal.

## Requisitos

- Node.js en una versión compatible con la versión de Astro del proyecto.
- npm (incluido con Node.js).
- Editor de código y Git (recomendados).

## Ejecución local

Desde una terminal ubicada en la carpeta raíz del repositorio:

```bash
npm install
npm run dev
```

- `npm install`: instala las dependencias de `package.json`.
- `npm run dev`: inicia el servidor de desarrollo y muestra su URL local.

## Compilación y revisión

```bash
npm run build
npm run preview
```

- `npm run build`: genera el sitio estático en `dist/`.
- `npm run preview`: permite revisar esa versión localmente.

## Organización del código

- `src/pages/`: páginas.
- `src/components/`: componentes reutilizables.
- `src/layouts/`: plantillas compartidas.
- `src/styles/`: estilos.
- `src/data/projects.ts`: catálogo de proyectos.
- `public/`: recursos estáticos.

## Actualización de proyectos

Editar `src/data/projects.ts`. Agregar enlaces a los repositorios independientes solo cuando estén listos para publicarse. No incluir credenciales, información confidencial ni resultados experimentales que no hayan sido verificados.

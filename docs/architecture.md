# Arquitectura · conciencia-cai.org

## Panorama general
- SPA construida con React 18 + Vite, sin routing formal; navegación se controla mediante estados y hashes.
- Entrada: `src/main.jsx` hidrata `App.jsx`.
- `App.jsx` actúa como “director de escena”: gestiona vista activa (`HOME`, `MEN`, `WOMEN`), abre modales y sincroniza scroll/hash.

## Layout lógico
1. **Views** (`src/views/*`): Composiciones de alto nivel.
   - `HomeView` renderiza `Navbar`, `HeroVista`, `MethodOverview`, `HumanGuide`, `ContactSection`, `Footer`.
   - `MenSiteView` y `WomenSiteView` replican estructura con contenido y estilos específicos para cada sede.
2. **Components** (`src/components/*`): Bloques reutilizables (hero, galerías, testimonios, modales, footer, navegación flotante).
3. **Sections** (`src/sections/ContactSection.jsx`): Piezas autopistas con lógica propia (formulario y validaciones).
4. **Utils** (`src/utils/dom.js`, `src/utils/sites.js`): Servicios puros para scroll suave y normalización de datos.
5. **Styles** (`src/styles/**/*`): SCSS modularizado (globals, components, sections, views) que usa variables y mixins compartidos.

## Flujo de estado y navegación
- `App.jsx` determina qué vista mostrar y aplica clases de tema al `<body>` dentro de un `useEffect`.
- `handleNavigate(hash)` enruta hashes especiales: abre modales (`#metodo`), cambia de vista (`#sede-varonil`, `#sede-femenil`) o hace scroll suave vía `scrollToHash`.
- Cuando se regresa al `HOME`, `pendingHash` preserva el destino para aplicar `scrollToHash` después del render.

## Formularios y validaciones
- `ContactSection` mantiene `formData`, `errors`, `status` vía `useState`.
- Validaciones sincronas: nombre requerido, teléfono 10 dígitos numéricos, email formato básico, sede requerida (a menos que esté bloqueada).
- Microcopys cambian con eventos `onFocus`/`onMouseEnter` para reforzar tonos `care` y `sage`.

## Estilos y theming
- Variables globales definen tipografías, colores y spacing; el body aplica gradientes y pseudo-elementos decorativos.
- Clases `theme-men` / `theme-women` ajustan `--accent-*` para tonalidades azul/rosa.
- Componentes siguen estructura `.component`, `.component__element`, `.component--modifier`.

## Build & calidad
- Desarrollo: `npm run dev`.
- Producción: `npm run build` genera artefactos estáticos en `dist/`.
- QA: ESLint (config moderna flat), Stylelint para SCSS, `tsc --noEmit` para validar referencias JSDoc/TS, `npm audit` para dependencias.

## Integraciones y assets
- Recursos locales (imágenes, PDFs) viven en `docs/` y `public/`.
- No hay backend; formularios actualmente muestran `status` local (enviar real requerirá integrar API o servicio externo futuro).
- SVG embebidos se usan para íconos; imports de imágenes soportados gracias a `src/types/assets.d.ts`.

## Consideraciones futuras
- Si se agrega routing real, dividir vistas en rutas con React Router manteniendo lógica de hash actual como fallback.
- Para enviar formularios, añadir servicio en `utils/api.js` con fetch y manejo de errores manteniendo validaciones actuales.
- Mantener sincronía entre estilos globales y componentes; las nuevas secciones deben declararse en `src/styles/views/*` para mantener la separación temática.

# AI Context · conciencia-cai.org

## Propósito del sitio
- Landing informativa para las sedes Clínica de Atención Integral (Pachuca) dirigida a familias que buscan rehabilitación de adicciones.
- Narrativa en español neutro; tono empático, profesional y libre de juicios.
- Objetivo principal: incentivar el contacto confidencial vía formulario o WhatsApp; todo CTA debe remitir a esos canales.

## Stack y tooling
- Build con **Vite 7** (`npm run dev|build|preview`).
- **React 18** con componentes funcionales, hooks estándar (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`).
- Estilos en **SCSS** global con convención tipo BEM (`block__element--modifier`), variables en `src/styles/_variables.scss`, mixins reutilizables en `_mixins.scss`.
- Tipado ligero mediante **JSDoc** (`@typedef`, anotaciones en props y eventos) para mejorar DX en JS.
- Utilidades compartidas en `src/utils/*` (`scrollToHash`, `normalizeSedeValue`, `inferSiteGender`).
- Calidad: `npm run lint:js`, `npm run lint:css`, `npm run typecheck`, `npm run audit`.

## Convenciones de código
- Imports relativos cortos; módulos `.jsx` para componentes y vistas, `.js` para utilidades planas.
- Componentes “view” (`src/views/*`) orquestan secciones y manejan navegación/accesos. Componentes UI en `src/components/*`, secciones especializadas en `src/sections/*`.
- Props documentadas vía JSDoc antes de la definición del componente.
- Estados derivados (ej. `activeView`, `selectedSede`) viven en `App.jsx` y se propagan hacia abajo; evita estados duplicados.
- Usar constantes configurables cercanas al uso (ej. `DEFAULT_OFFSET`, `FLOATING_BUTTONS`).
- No introducir dependencias nuevas sin justificar; preferir utilidades nativas o helpers existentes.
- Accesibilidad: `role`, `aria-label`, `aria-live` y navegación por teclado ya implementadas; mantenerlos en nuevas piezas.

## Estilos y theming
- `body` define custom properties para tipografías y colores; temas se alternan con clases `theme-men` y `theme-women`.
- Animaciones suaves controladas por clases `.reveal`, respetando `prefers-reduced-motion`.
- Botones base importados desde `./styles/components/Button.scss`; reutilizar clases utilitarias (`.btn`, `.text-muted`, `.container`).
- Formularios usan `.field`, `.field__error`, `.contact-form__micro`, etc.; conserva estructura para coherencia.

## Contenido y UX
- Copys deben resaltar confidencialidad, acompañamiento y claridad procedimental (ej. “Modelo Minnesota + 12 Pasos”).
- Evitar lenguaje medicalizado complejo; priorizar mensajes breves, orientados a la acción.
- CTA principales: “Agenda tu valoración”, “Modelo Minnesota”, enlaces a WhatsApp.
- Formularios: validar en cliente (teléfono 10 dígitos, email RFC simple); mensajes de error cortos y empáticos.
- Íconos SVG embebidos en componentes; mantener atributos `role="img"` y `aria-hidden` según corresponda.

## Accesos rápidos
- Scroll suave implementado con `scrollToHash(hash, offset)` y `DEFAULT_OFFSET = 92`.
- `FloatingNavButtons` usa un arreglo inmutable `FLOATING_BUTTONS`; cualquier nuevo acceso debe respetar la estructura `{ hash|href, label, type, icon }`.
- Modales (`PrivacyModal`, `ModelModal`) controlados en `App.jsx`; abrir/cerrar mediante `useState`.

Usa este contexto como referencia para cualquier código o contenido nuevo dentro del proyecto.

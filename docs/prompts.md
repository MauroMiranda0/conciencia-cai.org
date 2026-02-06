# Prompt Playbook · conciencia-cai.org

## Cómo pedir cambios de código
1. Menciona el componente o vista exacta (`src/components/HeroVista.jsx`) y la intención.
2. Describe entradas/salidas esperadas, validaciones y estilos a reutilizar.
3. Señala dependencias existentes que deban respetarse (hooks, utilidades, clases SCSS).

**Plantilla**
```
Quiero modificar `src/components/ComponentName.jsx` para <propósito>. Usa los estilos ya definidos en <scss>. Respeta las props <lista>. Asegura accesibilidad con <requisitos>.
```

## Cómo pedir nuevo contenido/copy
- Indica sección visible (ej. “tarjetas de testimonios”).
- Define tono (“esperanzador pero directo”), CTA objetivo y cualquier dato duro (ej. porcentaje de rehabilitación si existe).
- Limita longitud aproximada.

**Plantilla**
```
Genera 3 bullets para la sección <nombre> destacando <atributos>. Máximo 20 palabras cada uno, tono empático y profesional. Incluir verbos de acción.
```

## Cómo pedir documentación o análisis
- Señala archivo objetivo o tema (arquitectura, accesibilidad, QA).
- Pide formato específico (tabla, checklist, narrativa).
- Incluye contexto necesario (flujos, dependencias).

**Plantilla**
```
Documenta el flujo de <feature> en formato checklist, cubriendo hooks usados, validaciones y eventos emitidos. Referencia componentes clave.
```

## Ejemplos rápidos
- **Nuevo CTA flotante**: “Agrega un botón en `FloatingNavButtons.jsx` que abra `tel:` para llamadas urgentes. Usa ícono inline y tipo `external`.”
- **Ajuste de formulario**: “En `ContactSection.jsx`, añade campo opcional ‘Parentesco’. Validar longitud mínima 3 caracteres y mostrar error bajo el input.”
- **Copy hero**: “Escribe un titular y subtítulo para `HeroVista` resaltando confidencialidad inmediata; máximo 12 palabras para el titular.”

Sigue estas guías para mantener consistencia técnica y editorial al crear futuras solicitudes.

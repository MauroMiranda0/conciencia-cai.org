module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    /* SCSS moderno */
    'at-rule-no-unknown': null,

    /* Equipo: permitir separación visual entre bloques de @use/@forward */
    'at-rule-empty-line-before': null,

    /* Tokens y design system: evitar fricción cosmética */
    'color-hex-length': null,
    'value-keyword-case': null,
    'custom-property-empty-line-before': null,

    /* Colores: permitir rgba clásico y notación alpha decimal */
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,

    /* Flujo por sprints: no bloquear por parciales vacíos */
    'no-empty-source': null,

    /* Reglas importantes */
    'declaration-no-important': null,
    // Permit BEM-style naming (block__element--modifier) alongside kebab-case.
    'selector-class-pattern': '^[a-z0-9]+(?:[-_]{1,2}[a-z0-9]+)*$',
    'media-feature-range-notation': null,
    'keyframes-name-pattern': null,
    'declaration-empty-line-before': null,
    'rule-empty-line-before': null,
  },
};

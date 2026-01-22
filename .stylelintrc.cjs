module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    /* Permitimos SCSS moderno */
    'at-rule-no-unknown': null,

    /* Tokens y design system */
    'color-hex-length': null,
    'value-keyword-case': null,
    'custom-property-empty-line-before': null,

    /* Colores modernos: permitimos rgba clásico */
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,

    /* Permitimos archivos parciales aún vacíos en sprints */
    'no-empty-source': null,

    /* Mantenemos reglas importantes */
    'declaration-no-important': true,
    'selector-class-pattern': '^[a-z0-9\\-]+$',
  },
};

// eslint.config.js
import js from '@eslint/js';

export default [
  // 1. Código fuente del navegador
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      'no-implied-eval': 'error',
    },
  },

  // 2. Ignorar archivos que NO son código fuente
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.cjs',
      '*.json',
    ],
  },
];

// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  // 1. Código fuente del navegador
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
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

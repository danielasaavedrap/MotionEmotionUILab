import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  // Archivos a los que aplica
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
    },

    rules: {
      // Base JS (equivalente a eslint:recommended)
      ...js.configs.recommended.rules,
      
      // React moderno (Vite)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      
      // Hooks (esto SÍ importa)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // TypeScript (seguridad, no castigo)
      "no-unused-vars": "off",
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    ignores: ['dist', 'node_modules', 'coverage'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

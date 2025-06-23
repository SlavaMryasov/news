import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'eslint.config.js',
      'package.json',
      '.vite/',
      'postcss.config.js',
      '.prettierrc.cjs',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-lines': ['warn', { max: 400 }],
      'max-params': ['error', 3],
    },
  },
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)

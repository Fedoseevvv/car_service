import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'warn',
  },
});


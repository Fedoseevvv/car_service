import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn"
    },
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  }),
];

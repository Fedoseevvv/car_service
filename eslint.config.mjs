import { FlatCompat } from "@eslint/eslintrc/dist/eslintrc.cjs"

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }),
];

export default eslintConfig;

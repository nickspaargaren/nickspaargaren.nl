import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import depend from "eslint-plugin-depend";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      depend,
    },
    rules: {
      "prettier/prettier": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
    extends: ["depend/flat/recommended"],
  },
);

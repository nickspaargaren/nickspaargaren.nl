module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "simple-import-sort", "@typescript-eslint"],
  extends: ["prettier", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "simple-import-sort/imports": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};

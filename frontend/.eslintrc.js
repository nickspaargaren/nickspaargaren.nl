module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
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
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};

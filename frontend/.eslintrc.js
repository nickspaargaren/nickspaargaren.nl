module.exports = {
  extends: ["prettier"],
  plugins: ["prettier", "simple-import-sort"],
  parser: "babel-eslint",
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
  },
};

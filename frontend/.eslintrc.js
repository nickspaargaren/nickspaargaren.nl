module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
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
  },
};

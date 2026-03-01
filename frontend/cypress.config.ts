import { defineConfig } from "cypress";
import htmlvalidate from "cypress-html-validate/plugin";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      htmlvalidate.install(on, {
        rules: {
          "require-sri": "off",
          "element-required-content": "off",
          "valid-id": "off",
        },
      });
    },
    supportFile: false,
    baseUrl: "http://localhost:9000/",
  },
});

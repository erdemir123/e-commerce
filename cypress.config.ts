import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

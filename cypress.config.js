const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    GOREST_TOKEN: process.env.GOREST_TOKEN,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");
require("dotenv").config();
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Casino",
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    autoOpen: true,
    overwrite: true,
    html: true,
    json: true,
  },
  video: true,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  screenshotsFolder: "cypress/images",
  env: {
    ...process.env,
  },
  e2e: {
    viewportWidth: 1536,
    viewportHeight: 960,
    defaultCommandTimeout: 10000,
    excludeSpecPattern: ['cypress/e2e/**/**.exclude.cy.js'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on, config);
    },
  },
});

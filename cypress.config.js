const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: "Casino",
    // embeddedScreenshots: true,
    // inlineAssets: false,
    // saveAllAttempts: true,
    // autoOpen: true,
    // overwrite: true,
    // html: true,
    // json: true,
  },
  e2e: {
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 20000,
    trashAssetsBeforeRuns: true,
    pageLoadTimeout: 20000,
    screenshotOnRunFailure: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--mute-audio');
        }
        return launchOptions;
      });

      require('cypress-mochawesome-reporter/plugin')(on);

      return {
        ...config,
        browsers: config.browsers.filter((b) => b.name === 'chrome'),
        excludeSpecPattern: ['cypress/e2e/**/**.exclude.cy.js'],
      };
    }
  }
});

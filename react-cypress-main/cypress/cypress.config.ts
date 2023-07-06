import { defineConfig } from "cypress";
import { config } from "dotenv";

config({ path: "../.env" });

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  trashAssetsBeforeRuns: true,
  video: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  scrollBehavior: "center",
  watchForFileChanges: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  reporter: "node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome/single-specs",
    reportFilename: "spec",
    html: false,
    json: true,
    timestamp: "dd-mm-yyyy_HH-MM-ss",
  },
  env: {
    API: process.env.API,
    API_KEY: process.env.API_KEY,
    CYPRESS_ENVIRONMENT: process.env.CYPRESS_ENVIRONMENT,
    CYPRESS_ENVIRONMENT_VARIABLE: process.env.CYPRESS_ENVIRONMENT_VARIABLE,
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,

    setupNodeEvents(on, config) {
      // config.configFile = "cypress/cypress.config.ts";
      // config = codeCoverageTask(on, config);
      require('@cypress/code-coverage/task')(on, config)
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});

const cypress = require("cypress");
const fse = require("fs-extra");
const generator = require("mochawesome-report-generator");
const { merge } = require("mochawesome-merge");

(async () => {
    await fse.remove("cypress/reports");
    await cypress.run({
        configFile: "cypress/cypress.config.ts",
        //browser: "chrome",
        //spec: "cypress/e2e/cypress-config-test.cy.ts",
    });
    const jsonReport = await merge({
        files: ["cypress/reports/mochawesome/single-specs/*.json"],
    });
    await generator.create(jsonReport, {
        reportDir: "cypress/reports/mochawesome/final-report",
    });
    await fse.writeJson(
        "cypress/reports/mochawesome/final-report/mochawesome.json",
        jsonReport
    );
})();

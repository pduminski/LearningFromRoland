import { commonSelectors } from "@e2e/support/selectors/common/common-selectors";

describe("Test cypress run config for different environment variables values", () => {
    switch (Cypress.env("CYPRESS_ENVIRONMENT_VARIABLE")) {
        case "VariableOne": {
            it("Smoke test variable one value", () => {
                cy.log("Variable one value test run");
            });
            break;
        }
        case "VariableTwo": {
            it("Smoke test variable two value", () => {
                cy.log("Variable two value test run");
            });
            break;
        }
        case "VariableThree": {
            it("Smoke test variable three value", () => {
                cy.log("Variable three value test run");
            });
            break;
        }
        default: {
            it("No variable value provided", () => {
                cy.log("No value provided");
            });
            break;
        }
    }
});

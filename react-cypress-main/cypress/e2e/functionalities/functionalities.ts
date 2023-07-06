import {commonSelectors} from "@e2e/support/selectors/common/common-selectors";

describe("Functionalities tests", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
    beforeEach(() => {
        cy.visit("/");
    });
    it("As a User I want use this and this functionality", () => {
        cy.clickDefault();
    });
});
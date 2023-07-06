import {commonSelectors} from "@e2e/support/selectors/common/common-selectors";

describe("Features tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("As a User I want to do this and this", () => {
        cy.clickDefault();
    });
});
import {commonSelectors} from "@e2e/support/selectors/common/common-selectors";

describe("Bugs tests", () => {
    before(() => {
        cy.visit("/");
    });

    beforeEach(() => {

    });

    it("As a User I want to check that I don't encounter this and this bug", () => {
        cy.clickDefault();
        cy.selectRandomSomethingOne();
        cy.fillRandomUserDetails();
        cy.interceptOnceUserCheckWithError();
        cy.interceptOnceConsoleBody();
    });
});

describe.skip("Bugs tests", () => {
    before(() => {
        cy.visit("/");
    });

    it.only("As a User I want to check that I don't encounter this and this bug", () => {
        cy.clickDefault();
        cy.selectRandomSomethingOne();
        cy.fillRandomUserDetails();
        cy.interceptOnceUserCheckWithError();
        cy.interceptOnceConsoleBody();
    });
});




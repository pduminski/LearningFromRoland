import {commonSelectors} from "@e2e/support/selectors/common/common-selectors";

describe('Create React app tests', () => {
  it("Title page loads", () => {
    cy.visit("/");
    cy.get("[data-testid=logo").should("be.visible");
  });
});
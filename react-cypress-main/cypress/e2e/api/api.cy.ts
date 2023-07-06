import { mutation } from "@e2e/support/api/mutation/mutation";
import { validationSchemaOne } from "@e2e/support/api/validation-schema/validation-schema";

describe("API tests", () => {
    it("Smoke test", () => {
        cy.request({
            url: Cypress.env("API"),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": Cypress.env("API_KEY"),
            },
            body: {
                query: mutation,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.validateResponse(response, validationSchemaOne);
        });
    });
});

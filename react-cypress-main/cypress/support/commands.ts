/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import "cypress-iframe";
import "@percy/cypress";
import "@cypress/code-coverage/support";
import "cypress-real-events/support";
import Ajv from "ajv";

import "./methods/common-methods";
import {commonSelectors} from "@e2e/support/selectors/common/common-selectors";

Cypress.Commands.add(
    "checkElementContainsValue",
    (selector: string, value: string) => {
        cy.getByDataTestId(selector).contains(value);
    }
);

Cypress.Commands.add("clearInputField", (selector: string) => {
    cy.getByDataTestId(selector).clear();
});

Cypress.Commands.add("clickOn", (selector: string) => {
    cy.getByDataTestId(selector).click();
});

Cypress.Commands.add("forceClickOn", (selector: string) => {
    cy.getByDataTestId(selector).click({ force: true });
});

Cypress.Commands.add("fillInputField", (selector: string, value: string) => {
    cy.getByDataTestId(selector).clear().type(value);
});

Cypress.Commands.add("getByDataTestId", (selector: string) => {
    return cy.get(`[data-testid=${selector}]`);
});

Cypress.Commands.add(
    "checkThatCardIsSelected",
    (selector: string, isSelected: string) => {
        cy.getByDataTestId(selector)
            .invoke("attr", "aria-selected")
            .should("eq", isSelected);
    }
);

Cypress.Commands.add(
    "checkThatRadioButtonIsChecked",
    (selector: string, isChecked: boolean) => {
        if (isChecked) {
            cy.getByDataTestId(selector).find("input").should("be.checked");
        } else {
            cy.getByDataTestId(selector).find("input").should("not.be.checked");
        }
    }
);

Cypress.Commands.add(
    "checkThatAccordionIsExpanded",
    (selector: string, isExpanded: string) => {
        cy.getByDataTestId(selector)
            .parents('[role="button"]')
            .invoke("attr", "aria-expanded")
            .should("eq", isExpanded);
    }
);

Cypress.Commands.add(
    "checkThatToggleIsChecked",
    (selector: string, isChecked: boolean) => {
        if (isChecked) {
            cy.getByDataTestId(selector).should("have.class", "Mui-checked");
        } else {
            cy.getByDataTestId(selector).should("not.have.class", "Mui-checked");
        }
    }
);

Cypress.Commands.add("checkIfElementIsVisible", (selector: string) => {
    return cy.getByDataTestId(selector).should("be.visible");
});

Cypress.Commands.add("checkIfElementNotExist", (selector: string) => {
    return cy.getByDataTestId(selector).should("not.exist");
});

Cypress.Commands.add("checkIfTextIsShown", (selector: string, text: string) => {
    return cy.getByDataTestId(selector).contains(text).should("be.visible");
});

Cypress.Commands.add("checkIfTooltipMessageIsVisible", (text: string) => {
    return cy.get("div[role=tooltip] > div").should("have.text", text);
});

Cypress.Commands.add(
    "checkTheStateOfElement",
    (selector: string, state: string) => {
        return cy.getByDataTestId(selector).should(`be.${state}`);
    }
);

Cypress.Commands.add(
    "hoverElementFromDropdown",
    (selector: string, value: string) => {
        return cy.get(selector).contains(value).trigger("mouseover");
    }
);

Cypress.Commands.add(
    "clickElementFromDropdown",
    (selector: string, value: string) => {
        return cy.get(selector).contains(value).click();
    }
);

Cypress.Commands.add("checkInputValue", (selector: string, value: string) => {
    cy.getByDataTestId(selector).invoke("attr", "value").should("eq", value);
});

Cypress.Commands.add(
    "checkInputFieldLabel",
    (selector: string, value: string) => {
        return cy.get(`[id=${selector}]`).contains(value);
    }
);

Cypress.Commands.add(
    "checkDateFieldLabel",
    (selector: string, value: string) => {
        return cy.get(`${selector}`).contains(value);
    }
);

Cypress.Commands.add("validateResponse", (response: any, schema: object) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(response);
    console.log(response.body);
    console.log({ valid });
    if (!valid) console.log(validate.errors);
    expect(valid).to.be.true;
});

Cypress.Commands.add("clickOutside", () => {
    cy.get("body").click(0, 0);
});

Cypress.Commands.add("interceptOnce", (method, url, response) => {
    let count = 0;
    return cy.intercept(method, url, (req) => {
        count += 1;
        if (count < 2) {
            req.reply(response);
        } else {
            // do nothing
        }
    });
});

Cypress.Commands.add("interceptOnceSkip", (method, url) => {
    let count = 0;
    return cy.intercept(method, url, () => {
        count += 1;
        if (count < 2) {
            console.log("Interception skipped");
        } else {
            // do nothing
        }
    });
});

Cypress.Commands.add("checkValidation", (validationText: string) => {
    cy.get(commonSelectors.error)
        .contains(validationText)
        .should("be.visible");
});

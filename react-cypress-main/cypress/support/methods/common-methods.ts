import {commonCopy, commonSelectors} from "../selectors/common/common-selectors";
import {createRandomUser, createRandomAddress, correctLocations} from "@e2e/support/generate-data";

const randomUser = createRandomUser();
const randomAddress = createRandomAddress();

Cypress.Commands.add("clickDefault", () => {
    cy.clickOn(commonSelectors.buttonDefault);
});

Cypress.Commands.add("selectRandomSomethingOne", () => {
    cy.fillInputField(
        commonSelectors.input,
        randomUser.year
    );
    cy.getByDataTestId(commonSelectors.input).type(
        "{downarrow}{enter}"
    );
    cy.clickOn(commonSelectors.buttonDefault);
});

Cypress.Commands.add("fillRandomUserDetails", () => {
    cy.get(`[data-testid="autocomplete-input"]`)
        .eq(0)
        .click()
        .type(randomUser.year)
        .wait(3000)
        .type("{downarrow}{enter}");
    cy.clickOn(commonSelectors.buttonDefault);
    cy.wait(500);
    cy.clickElementFromDropdown(
        commonSelectors.buttonDefault,
        randomUser.status
    );
    cy.get(`[data-testid="autocomplete-input"]`)
        .eq(1)
        .click()
        .type(randomUser.year)
        .type("{downarrow}{enter}");
    cy.fillInputField(
        commonSelectors.buttonDefault,
        randomUser.year.toString()
    );
    cy.clickOn(commonSelectors.buttonDefault);
});
Cypress.Commands.add("fillRandomMoreDetails", () => {
    cy.clickOn(commonSelectors.buttonDefault);
    cy.wait(1000);
    cy.contains(correctLocations[0].label).dblclick();
    cy.fillInputField(
        commonSelectors.buttonDefault,
        randomUser.year
    )
        .wait(3000)
        .type("{downarrow}{enter}");
    cy.clickOn(commonSelectors.buttonDefault);
    cy.wait(500);
    cy.clickElementFromDropdown(
        commonSelectors.buttonDefault,
        correctLocations[0].label
    );
    cy.clickOn(commonSelectors.buttonDefault);
    cy.get(`li[data-value=${randomUser.year}]`).click();
    cy.clickOn(commonSelectors.buttonDefault);
});
Cypress.Commands.add("fillRandomData", () => {
    cy.iframe('iframe[title="inpute frame one title"]')
        .find('input[autocomplete="input-name-one"]')
        .type("111111111111111111111111");
    cy.iframe('iframe[title="inpute frame two title"]')
        .find('input[autocomplete="input-name-two"]')
        .type("1140");
    cy.iframe('iframe[title="inpute frame three title"]')
        .find('input[autocomplete="input-name-three]')
        .type("456");
    cy.get(commonSelectors.logo).eq(0).click();
});
Cypress.Commands.add("clickButtonWithTab", () => {
    // @ts-ignore
    cy.get(`[data-testid="${commonSelectors.logo}"]`)
        .tab()
        .tab()
        .click();
});

Cypress.Commands.add("fillRandomDataTwo", () => {
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/*").as("googleapi");
    cy.fillInputField(commonSelectors.logo, "1");
    cy.wait("@googleapi");
    cy.fillInputField(commonSelectors.logo, "1234")
        .wait(3000)
        .type("{downarrow}{enter}");
    cy.clickElementFromDropdown(
        commonSelectors.logo,
        correctLocations[0].label
    );
    cy.checkIfTextIsShown(
        commonSelectors.logo,
        commonCopy.text
    );
    cy.checkIfElementIsVisible(commonSelectors.logo);
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/*").as(
        "googleapi"
    );
    cy.wait("@googleapi");
    cy.fillInputField(
        commonSelectors.logo,
        "New York"
    )
        .wait(3000)
        .type("{downarrow}{enter}");
    cy.realPress("Escape");
    cy.get('[data-testid="-header"]').should("be.visible");
    cy.getByDataTestId("logo").click();
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="logo"] > button').click();
    cy.get(`[data-testid="tooltip"]`).tab().tab().click();
    cy.get("#logo").click();
});
Cypress.Commands.add("interceptOnceUserCheckWithError", () => {
    let requestCount = 0;
    return cy.intercept(
        "POST",
        Cypress.env("API"),
        (req) => {
            requestCount += 1;
            if (requestCount < 2) {
                req.reply({
                    fixture: "fixtures.json",
                });
                console.log(
                    "Pre error request payload value",
                    req.body.variables.input.value
                );
                console.log(
                    "Pre error request payload other value",
                    req.body.variables.input.otherValue
                );
            } else {
                // do nothing
            }
        }
    );
});

Cypress.Commands.add("interceptOnceConsoleBody", () => {
    let requestCount = 0;
    return cy.intercept(
        "POST",
        Cypress.env("API"),
        (req) => {
            requestCount += 1;
            if (requestCount < 2) {
                console.log(
                    "No error request payload value",
                    req.body.variables.input.value
                );
                console.log(
                    "No error request payload other value",
                    req.body.variables.input.otherValue
                );
            } else {
                // do nothing
            }
        }
    );
});



Cypress.Commands.add("fillRandomDataAddress", () => {
    cy.fillInputField(
        commonSelectors.logo,
        randomAddress.firstName
    );
    cy.fillInputField(
        commonSelectors.logo,
        randomAddress.correctBirthdayDate.month
    );
    cy.forceClickOn(commonSelectors.toggle.switch);
    cy.get('[data-testid="button"]').click();
    cy.checkIfTextIsShown(
        commonSelectors.logo,
        commonCopy.text
    );
    cy.checkIfTooltipMessageIsVisible(
        commonCopy.text
    );
    cy.checkThatCardIsSelected(
        commonSelectors.logo,
        "false"
    );
    cy.checkTheStateOfElement(commonSelectors.buttonDefault, "enabled");
    cy.get("ul > li").contains(randomUser.status).dblclick();
    cy.contains(randomUser.status);
    cy.get(`[data-testid="autocomplete-input"]`)
        .eq(0)
        .type("{downarrow}{enter}");
    cy.get(`[data-testid="autocomplete-input"]`).eq(1).click();
    cy.checkInputValue(
        commonSelectors.input,
        randomUser.year
    );
    cy.checkElementContainsValue(
        commonSelectors.buttonDefault,
        randomUser.year
    );
    cy.get('[data-value="MyValue]').realClick();
    cy.clearInputField(commonSelectors.buttonDefault);
    cy.checkValidation("Must be a number");
    cy.get("[id=year]>").should(
        "have.text",
        randomUser.correctYear
    );
    cy.getByDataTestId(commonSelectors.buttonDefault).should("exist");
    cy.checkIfElementNotExist(commonSelectors.modalContainer);
    cy.interceptOnce("POST", Cypress.env("API"), {
        fixture: "fixtures.json",
    });
    cy.get('img[alt="some error"]').should("be.visible");
    cy.checkThatRadioButtonIsChecked(
        commonSelectors.buttonDefault,
        false
    );
    cy.checkThatAccordionIsExpanded(
        commonSelectors.accordion,
        "false"
    );
    for (const [key, value] of Object.entries(
        commonSelectors.accordion
    )) {
        cy.checkThatAccordionIsExpanded(value, "false");
        cy.checkThatAccordionIsExpanded(value, "true");
    }
    cy.checkThatToggleIsChecked(
        commonSelectors.buttonDefault,
        // commonSelectors.buttonDefault.switch,
        false
    );
});


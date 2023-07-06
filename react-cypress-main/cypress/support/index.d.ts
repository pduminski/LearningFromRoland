// Add all your custom global commands to the "Chainable" interface
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        checkElementContainsValue(
            selector: string,
            value: string
        ): Chainable<Element>;
        checkValidation(validationText: string): Chainable<Element>;
        clearInputField(selector: string): Chainable<Element>;
        clickOn(selector: string): Chainable<Element>;
        forceClickOn(selector: string): Chainable<Element>;
        fillInputField(selector: string, value: string): Chainable<Element>;
        getByDataTestId(selector: string, ...args: any[]): Chainable<Element>;
        checkThatCardIsSelected(
            selector: string,
            isSelected: string
        ): Chainable<Element>;
        checkThatRadioButtonIsChecked(
            selector: string,
            isChecked: boolean
        ): Chainable<Element>;
        checkThatAccordionIsExpanded(
            selector: string,
            isExpanded: string
        ): Chainable<Element>;
        checkThatToggleIsChecked(
            selector: string,
            isChecked: boolean
        ): Chainable<Element>;
        checkIfElementIsVisible(selector: string): Chainable<Element>;
        checkIfElementNotExist(selector: string): Chainable<Element>;
        checkIfTextIsShown(selector: string, text: string): Chainable<Element>;
        checkIfTooltipMessageIsVisible(text: string): Chainable<Element>;
        checkTheStateOfElement(selector: string, state: string): Chainable<Element>;
        hoverElementFromDropdown(
            selector: string,
            value: string
        ): Chainable<Element>;
        clickElementFromDropdown(
            selector: string,
            value: string
        ): Chainable<Element>;
        checkInputValue(selector: string, value: string): Chainable<Element>;
        checkInputFieldLabel(selector: string, value: string): Chainable<Element>;
        checkDateFieldLabel(selector: string, value: string): Chainable<Element>;
        validateResponse(response: any, schema: object): Chainable<Element>;
        clickOutside(): Chainable<Element>;
        clickDefault(): Chainable<Element>;
        interceptOnce(method: any, url: any, response: any): Chainable<Element>;
        interceptOnceSkip(method: any, url: any): Chainable<Element>;
        realClick(): Chainable<Element>;
        realPress(key: any): Chainable<Element>;
        tab(): Chainable<Element>;
        selectRandomSomethingOne():  Chainable<Element>;
        fillRandomUserDetails():  Chainable<Element>;
        interceptOnceUserCheckWithError():  Chainable<Element>;
        interceptOnceConsoleBody():  Chainable<Element>;
        fillRandomMoreDetails():  Chainable<Element>;
        fillRandomData():  Chainable<Element>;
        clickButtonWithTab():  Chainable<Element>;
        fillRandomDataTwo():  Chainable<Element>;
        fillRandomDataAddress():  Chainable<Element>;
    }
}

interface StepData {
    stepsHistory?: Array<string>;
    preloadedState?: import("redux").DeepPartial<
        import("@redux/store").RootState
    >;
}

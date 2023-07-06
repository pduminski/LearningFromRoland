export const commonSelectors = {
    logo: "logo",
    toggle: {
        switch: ""
    },
    buttonDefault: "button-default",
    header: "header",
    subHeader: "sub-header",
    card: "card",
    cardImage: "card-image",
    cardTitle: "card-title",
    cardSubtitle: "card-subtitle",
    tooltip: "tooltip",
    input: "input",
    inputListbox: "input-listbox",
    dateField: "purchase-date-field",
    link: "link",
    // To be changed (modalContainer selector)
    modalContainer: "modal-container",
    modalTableHeadRow: "table-head-row",
    modalTableBodyRow: "table-body-row",
    checkbox: '[data-testid="checkbox"]',
    button: '[data-testid="button"]',
    error: "error",
    errorText:
        "Error text",
    container: "container",
    modal: "modal",
    dropdown: "dropdown",
    box: "box",
    accordion: "accordion",
    accordionItems: {
        one: "one",
        two: "two",
        three: "three"
    },
} as const;
export const commonCopy = {
    text: "text",
    headerText: "header text",
    subHeaderText:
        "sub header text",
    tooltipMessage:
        "tooltip message",
    emailHelpText: "email help text",
    title: "title",
    subTitle: "sub title",
} as const;
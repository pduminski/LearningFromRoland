export const validationSchemaOne = {
    type: "object",
    properties: {
        data: {
            type: "object",
            properties: {
                createUser: {
                    type: "object",
                    properties: {
                        secret: { type: "string" },
                    },
                },
            },
            required: ["data"],
        },
    },
};

export const validationSchemaTwo = {
    type: "object",
    properties: {
        data: {
            type: "object",
            properties: {
                getUSer: {
                    type: "object",
                    properties: {
                        decision: { type: "string" },
                        decisionTimestamp: { type: "string" },
                        notes: {
                            type: "array",
                            items: {
                                type: "string",
                                pattern: "Accepted",
                            },
                        },
                    },
                },
            },
        },
    },
};

export const validationSchemaThree = {
    type: "object",
    properties: {
        data: {
            type: "object",
            properties: {
                getAddress: {
                    type: "object",
                    properties: {
                        Street: { type: "string" },
                        BuldingNumber: { type: "integer" },
                        FlatNumber: { type: ["integer", "null"] },
                    },
                },
            },
            required: ["data"],
        },
    },
};


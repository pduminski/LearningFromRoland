import EnumName from "@enums/EnumName";
import getViewPath from "@utils/getViewPath";

import {faker} from '@faker-js/faker';
import {correctLocations, RandomAddress, RandomUser} from "../../generate-data";

export const detailsView = (
    randomUser: RandomUser,
    randomAddress: RandomAddress
): any => ({
    viewHistory: [getViewPath(EnumName.ENUM_NAME_ONE)],
    preloadedState: {
        person: {
            personFirstName: "John",
            anotherPerson: {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
            },
        },
        address: {
            location: correctLocations[0],
        },
    },
});

import { faker } from '@faker-js/faker';

export const currentYear = new Date().getFullYear();
export const nextYear = currentYear + 1;

export type RandomUser = ReturnType<typeof createRandomUser>;
export type RandomAddress = ReturnType<typeof createRandomAddress>;

export const createRandomUser = () => ({
    status: faker.helpers.arrayElement(statusReasons),
    year: String(generateRandomNumber(1000, 2000)),
    number: generateRandomNumber(1, 3000),
    locations: correctLocations,
    correctYear: generateRandomNumber(1981, currentYear),
});

export const generateRandomNumber = (min: number, max: number): number => {
    return faker.datatype.number({
        min,
        max,
    });
};

export const createRandomAddress = () => ({
    wrongEmailAddress: faker.lorem.words(1),
    correctBirthdayDate: {
        month: "10",
        day: "10",
        year: nextYear,
    },
    differentDate: {
        month: generateRandomNumber(10, 12).toString(),
        day: "10",
        year: generateRandomNumber(currentYear - 17, currentYear).toString(),
    },
    firstName: faker.name.firstName(),
});

const statusReasons = [
    "Expired",
    "Active",
    "Future"
];
export const correctLocations = [
    {
        label:
            "America",
        slug: "BeverlyHills",
    },
    {
        label: "Europe",
        slug: "GreatBritain",
    }
] as const;
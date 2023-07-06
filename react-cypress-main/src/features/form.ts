export const typeName = [
    "Type name one",
    "Type name two",

] as const;

export type TypeName = typeof typeName[number];
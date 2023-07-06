import EnumName from "@enums/EnumName";

export default (viewName: EnumName): string =>
    viewName === EnumName.ENUM_NAME_ONE ? "/" : `/${viewName}`;

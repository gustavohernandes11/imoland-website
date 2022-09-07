export interface globalStateType {
    activeTheme: string | null | undefined;
    business_type_filter: null | string;
    immobile_type_filter: null | string;
    county_filter: null | string;
    distric_filter: null | string;
}
export const initialGlobalState: globalStateType = {
    activeTheme: "light",
    business_type_filter: null,
    immobile_type_filter: null,
    county_filter: null,
    distric_filter: null,
};

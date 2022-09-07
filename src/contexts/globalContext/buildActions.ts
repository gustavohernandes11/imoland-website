export const buildActions = (dispatch: Function) => {
    type changeThemePayloadType = null | undefined | "light" | "dark";
    type setFiltersPayloadType = null | undefined | string;

    return {
        changeTheme: (payload: changeThemePayloadType): void =>
            dispatch({ type: "CHANGE_THEME", payload }),
        setBusinessTypeFilter: (payload: setFiltersPayloadType): void =>
            dispatch({ type: "SET_BUSINESS_TYPE_FILTER", payload }),
        setImmobileTypeFilter: (payload: setFiltersPayloadType): void =>
            dispatch({ type: "SET_IMMOBILE_TYPE_FILTER", payload }),
        setCountyFilter: (payload: setFiltersPayloadType): void =>
            dispatch({ type: "SET_COUNTY_FILTER", payload }),
        setDistrictFilter: (payload: setFiltersPayloadType): void =>
            dispatch({ type: "SET_DISTRICT_FILTER", payload }),
    };
};

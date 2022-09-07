export const reducer = (
    state: any,
    action: { type: any; payload: any }
): object => {
    switch (action.type) {
        case "SET_BUSINESS_TYPE_FILTER":
            return { ...state, business_type_filter: action.payload };

        case "SET_IMMOBILE_TYPE_FILTER":
            return { ...state, immobile_type_filter: action.payload };

        case "SET_COUNTY_FILTER":
            return { ...state, county_filter: action.payload };

        case "SET_DISTRICT_FILTER":
            return { ...state, distric_filter: action.payload };

        case "CHANGE_THEME":
            if (action.payload === "dark" || action.payload === "light") {
                return { ...state, activeTheme: action.payload };
            }
            let newTheme = state.activeTheme;
            if (state.activeTheme === "light") {
                localStorage.setItem("storagedTheme", "dark");
                newTheme = "dark";
            } else if (state.activeTheme === "dark") {
                localStorage.setItem("storagedTheme", "light");
                newTheme = "light";
            }
            return { ...state, activeTheme: newTheme };

        default:
            return { ...state };
    }
};

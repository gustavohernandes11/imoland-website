import { render } from "@testing-library/react";
import { Theme } from "../theme/ThemeProvider";
import { GlobalContextProvider } from "../contexts/globalContext/GlobalContextProvider";

export const customRender = (ui) => {
    return render(
        <GlobalContextProvider>
            <Theme>{ui}</Theme>
        </GlobalContextProvider>
    );
};
// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

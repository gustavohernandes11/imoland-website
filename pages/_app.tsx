import "../src/styles/globals.css";
import type { AppProps } from "next/app";

import { Theme } from "../src/theme/ThemeProvider";
import { GlobalContextProvider } from "../src/contexts/globalContext/GlobalContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </GlobalContextProvider>
    );
}

export default MyApp;

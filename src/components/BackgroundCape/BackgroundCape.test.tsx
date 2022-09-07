import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { BackgroundCape } from "./index";

describe("<BackgroundCape/>", () => {
    it("should render the BackgroundCape component", () => {
        customRender(<BackgroundCape>Texto para teste</BackgroundCape>);
    });
});
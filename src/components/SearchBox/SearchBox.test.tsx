import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { SearchBox } from "./index";

describe("<SearchBox/>", () => {
    it("should render the SearchBox component", () => {
        customRender(<SearchBox>Texto para teste</SearchBox>);
    });
});
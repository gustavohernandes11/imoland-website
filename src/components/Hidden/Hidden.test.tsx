import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Hidden } from "./index";

describe("<Hidden />", () => {
    it("should not be a visible component", () => {
        const {container} = customRender(<Hidden />);
        const hiddenElement = container.querySelector('#sandbox > div > svg')
        expect(hiddenElement).not.toBeInTheDocument()
    });
});

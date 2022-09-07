import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Heading } from "./index";

describe("<Heading />", () => {
    it("should render the Heading component", () => {
        customRender(<Heading>Texto para teste</Heading>);
        const heading = screen.getByRole("heading", {
            name: /texto para teste/i,
        });
        expect(heading).toMatchInlineSnapshot(`
            <h1
              class="styles__Element-sc-f7plp0-0 dQmDPh"
            >
              Texto para teste
            </h1>
        `);
    });
});

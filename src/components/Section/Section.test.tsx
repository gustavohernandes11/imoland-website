import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Section } from "./index";

describe("<Section/>", () => {
    it("should render the Section component", () => {
        customRender(<Section>Texto para teste</Section>);
    });
});

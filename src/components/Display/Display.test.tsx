import PhoneContext from "../contexts/PhoneContext";
import Display from "./Display";
import { render, screen } from "@testing-library/react";
import mockPhoneContext from "../../mocks/mockPhoneContext";

describe("Given a Display component", () => {
  describe("When it is rendered and the user click on '6' '4' '5' '0'", () => {
    test("Then it should show '6450' on the screen", () => {
      const expectedText = "6450";

      render(
        <PhoneContext.Provider value={mockPhoneContext}>
          <Display />
        </PhoneContext.Provider>
      );

      const renderedText = screen.queryByText(expectedText);

      expect(renderedText).not.toBeNull();
    });
  });
});

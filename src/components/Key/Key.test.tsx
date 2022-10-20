import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it's rendered with  number 2", () => {
    test("Then it should show '2' in a Key", () => {
      const expectNumber = "2";
      render(
        <Key action={() => {}} numbersKey={expectNumber} className={""} />
      );

      const keyButton = screen.getByRole("button", { name: `${expectNumber}` });

      expect(keyButton).toBeInTheDocument();
    });
  });
});

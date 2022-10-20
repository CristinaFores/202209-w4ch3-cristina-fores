import Keyboard from "./Keyboard";
import { render, screen } from "@testing-library/react";

describe("Given a Keyboard componet", () => {
  describe("When it is render a Keyboard buttons", () => {
    test("Then it should 11 keys, and one is name delete", () => {
      const expectKeyboardButtons = 11;
      render(<Keyboard />);

      const KeysKeyboard = screen.getAllByRole("button");

      expect(KeysKeyboard.length).toBe(expectKeyboardButtons);
    });
  });
});

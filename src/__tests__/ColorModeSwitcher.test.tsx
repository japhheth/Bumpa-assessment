import { render, screen } from "@testing-library/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher/ColorModeSwitcher";

test("renders the ColorModeSwitcher component", () => {
  render(<ColorModeSwitcher />);
  expect(screen.getByRole("color-mode-button")).toBeInTheDocument();
});

test("has text content in the button", () => {
  render(<ColorModeSwitcher />);
  expect(screen.getByRole("color-mode-button")).toHaveTextContent("mode");
});

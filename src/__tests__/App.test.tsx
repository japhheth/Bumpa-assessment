import { render, screen } from "@testing-library/react";
import { App } from "../App";

test("renders the landing page", () => {
  render(<App />);
  expect(screen.getByRole("main-header")).toHaveTextContent(
    /Where are we in the world ?/
  );
});

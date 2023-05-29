import { screen } from "@testing-library/react";
import Countries from "../pages/Countries";
import { renderWithProviders } from "../../test-utils";

test("Search Input is rendered on the page", () => {
  renderWithProviders(<Countries />);
  expect(screen.getByRole("search")).toBeInTheDocument();
});

test("Search Input is not disabled on render", () => {
  renderWithProviders(<Countries />);
  expect(screen.getByRole("search")).not.toBeDisabled();
});

test("Search Input has correct placeholder", () => {
  renderWithProviders(<Countries />);
  expect(screen.getByPlaceholderText("Search for a country")).toBeTruthy();
});

test("Search to be sure the Dropdown is rendered on the page", () => {
  renderWithProviders(<Countries />);
  expect(screen.getByRole("dropdown-button")).toBeInTheDocument();
});

test("Ensure on load of the dropdown has intial placeholder on mount", () => {
  renderWithProviders(<Countries />);
  expect(screen.getByRole("dropdown-button")).toHaveTextContent(
    /Filter by Region/
  );
});

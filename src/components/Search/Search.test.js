import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactTestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { Search } from "./Search";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Give a Search component", () => {
  test("Should rendered correcty", () => {
    const view = ReactTestRenderer.create(
      <MemoryRouter initialEntries={["/search"]}>
        <Search />
      </MemoryRouter>
    );

    expect(view.toJSON()).toMatchSnapshot();
  });

  test("Should have a text 'Search Hero' in a document", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <Search />
      </MemoryRouter>
    );

    const searchText = screen.getByText("Search Hero");

    expect(searchText).toBeInTheDocument();
  });

  test("Should have show a Batman and input with this value", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Search hero");

    expect(input.value).toBe("batman");
  });

  test("It should show error if not found hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <Search />
      </MemoryRouter>
    );

    const expectText = screen.getByText("Don't have results: batman123");

    expect(expectText).toBeInTheDocument();
  });

  describe("When click a button with info in input", () => {
    test("Then it should call the function handleSubmit", () => {
      render(
        <MemoryRouter initialEntries={["/search"]}>
          <Search />
        </MemoryRouter>
      );

      const input = screen.getByPlaceholderText("Search hero");
      const button = screen.getByRole("button");

      userEvent.type(input, "Batman");
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith("?q=Batman");
    });
  });
});

import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { Search } from "./Search";

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
});

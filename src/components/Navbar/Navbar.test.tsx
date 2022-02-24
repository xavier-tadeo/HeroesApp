import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import { Navbar } from "./Navbar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Navbar component", () => {
  const contextValue = {
    user: {
      name: "Pedro",
      logged: true,
    },
    dispatch: jest.fn(),
  };
  describe("When it render", () => {
    test("It should show correcty form", () => {
      const view = ReactTestRenderer.create(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/"]}>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      expect(view.toJSON()).toMatchSnapshot();
    });

    test("It should show name Predo in the document", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/"]}>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const expectName = screen.getByText("Pedro");

      expect(expectName).toBeInTheDocument();
    });
  });

  describe("When clicked logout button", () => {
    test("It should called the navigate and dispatch with arguments", () => {
      const action = {
        type: types.logout,
        payload: {
          name: "",
          email: "",
        },
      };

      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/"]}>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(contextValue.dispatch).toHaveBeenCalledWith(action);
      expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
    });
  });
});

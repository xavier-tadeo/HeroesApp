import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import { Login } from "./Login";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Login component", () => {
  const contextValue = {
    user: {
      name: "",
      logged: false,
    },
    dispatch: jest.fn(),
  };

  describe("When it renderer", () => {
    const view = ReactTestRenderer.create(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    test("Then should render correcty form", () => {
      expect(view.toJSON()).toMatchSnapshot();
    });

    test("Then should do teh dispatch and navigate", () => {
      const action = {
        type: types.login,
        payload: {
          name: "Tadeoo",
          email: "tadeo@tadeo.es",
        },
      };
      localStorage.setItem("lastPath", "/dc");

      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(contextValue.dispatch).toHaveBeenCalledWith(action);
      expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
    });
  });
});

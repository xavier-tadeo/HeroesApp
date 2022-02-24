import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { DashboardRoutes } from "./DashboardRoutes";

describe("Given a Dashboard component", () => {
  const contextValue = {
    user: {
      logged: true,
      name: "user",
    },
  };
  describe("When", () => {
    test("Then should correcty form to Marvel", () => {
      const view = render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const nameUserText = screen.getByRole("link", { name: "Home" });
      const nameDch1 = screen.getByRole("heading", { name: "Marvel" });

      expect(nameDch1).toBeInTheDocument();

      expect(view).toMatchSnapshot();
      expect(nameUserText).toBeInTheDocument();
    });
    test("Then should correcty form to Dc", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/dc"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const nameDch1 = screen.getByRole("heading", { name: "DC" });

      expect(nameDch1).toBeInTheDocument();
    });
  });
});

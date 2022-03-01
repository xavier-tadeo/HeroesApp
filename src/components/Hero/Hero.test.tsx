import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";
import { AuthContext } from "../../auth/authContext";
import { Hero } from "./Hero";
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given Hero component", () => {
  const contextValue = {
    user: {
      name: "Xavier",
      logged: true,
    },
    dispatch: jest.fn(),
  };
  describe("When it renderer", () => {
    test("Then should show anything when don't have a hero", () => {
      const view = ReactTestRenderer.create(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/hero"]}>
            <Routes>
              <Route path="/hero" element={<Hero />} />
              <Route path="/" element={<h1>Don't have a Hero</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      expect(view.toJSON()).toMatchSnapshot();
    });

    test("The should show hero whe it have a hero", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
            <Routes>
              <Route path="/hero/:heroId" element={<Hero />} />
              <Route path="/" element={<h1>Don't have a Hero</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );
      const view = ReactTestRenderer.create(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
            <Routes>
              <Route path="/hero/:heroId" element={<Hero />} />
              <Route path="/" element={<h1>Don't have a Hero</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const nameCharacter = screen.getByText("Spider Man");

      expect(view.toJSON()).toMatchSnapshot();
      expect(nameCharacter).toBeInTheDocument();
    });
  });
  describe("When user click the button", () => {
    test("Then should return to the before screen", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
            <Routes>
              <Route path="/hero/:heroId" element={<Hero />} />
              <Route path="/" element={<h1>Don't have a Hero</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
  });
  describe("When no existing hero", () => {
    test("Then should return h1 with messege 'Don't have a hero'", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/hero/marvel-spider98989898"]}>
            <Routes>
              <Route path="/hero/:heroId" element={<Hero />} />
              <Route path="/" element={<h1>Don't have a Hero</h1>} />
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const h1Expect = screen.getByText("Don't have a Hero");

      expect(h1Expect).toBeInTheDocument();
    });
  });
});

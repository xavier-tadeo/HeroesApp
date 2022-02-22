import { types } from "../types/types";
import { authReducer } from "./authReducer";

describe("Given authReducer function", () => {
  describe("When don't receives info", () => {
    test("Then should return initial state", () => {
      const state = authReducer(
        { logged: false },
        { type: "", payload: { name: "", email: "" } }
      );

      expect(state).toEqual({ logged: false });
    });
  });
  describe("When receives a user", () => {
    test("Then should return a logged true and name user", () => {
      const action = {
        type: types.login,
        payload: { name: "Xavier", email: "user@example.com" },
      };

      const state = authReducer({ logged: false }, action);

      expect(state).toEqual({
        logged: true,
        name: "Xavier",
        email: "user@example.com",
      });
    });
  });
  describe("When receives action logout", () => {
    test("Then should return a logged false and delete name user", () => {
      const action = {
        type: types.logout,
        payload: { name: "", email: "" },
      };

      const state = authReducer({ logged: true, name: "xavier" }, action);
      expect(state).toEqual({ logged: false });
    });
  });
});

import { types } from "../types/types";

// const state = {
//   name: "arlet",
//   logged: true
// }

type TAction = {
  type: string;
  payload: {
    name: string;
    email: string;
  };
};

export const authReducer = (state = {}, action: TAction) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

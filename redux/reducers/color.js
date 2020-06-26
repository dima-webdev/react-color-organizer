import { ADD_COLOR, RATE_COLOR } from "../actionTypes";
import { v4 } from "uuid";

export const color = (state = {}, action) => {
  switch (action.type) {
    case ADD_COLOR:
      const { title, color } = action.payload;
      return {
        id: v4(),
        title,
        color,
        rating: 0
      };
    case RATE_COLOR:
      return state.id !== action.payload.id
        ? state
        : { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

import { ADD_COLOR, REMOVE_COLOR, RATE_COLOR } from "../actionTypes";
import { initialState } from "../store";
import { color } from "./color";

export const colors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        colors: [...state.colors, color({}, action)]
      };
    case REMOVE_COLOR:
      return {
        colors: [
          ...state.colors.filter(color => color.id !== action.payload.id)
        ]
      };
    case RATE_COLOR:
      return {
        colors: [...state.colors.map(c => color(c, action))]
      };
    default:
      return state;
  }
};

export default colors;

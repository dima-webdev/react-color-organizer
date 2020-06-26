import { ADD_COLOR, REMOVE_COLOR, RATE_COLOR } from "./actionTypes";

// Action creators

export const addColor = (title, color) => ({
  type: ADD_COLOR,
  payload: {
    title,
    color
  }
});

export const removeColor = id => ({
  type: REMOVE_COLOR,
  payload: { id }
});

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  payload: {
    id,
    rating
  }
});

export const removeColorAsync = id => dispatch => {
  setInterval(() => {
    dispatch(removeColor(id));
  }, 1000);
};

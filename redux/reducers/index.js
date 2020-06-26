import { combineReducers } from "redux";
import { colors } from "../reducers/colors";
import { color } from "../reducers/color";

export default combineReducers({ colors, color });

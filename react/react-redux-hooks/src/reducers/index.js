import counterReducer from "./counter";
import isLoggedInReducer from "./isLoggedIn";
import { combineReducers } from "redux";

const reducer = combineReducers({ counterReducer, isLoggedInReducer });
export default reducer;
import { combineReducers } from "redux";
import example from "./example";

const appReducers = combineReducers({
  example,
});

const rootReducer = (state, action) => {
  let reducers = appReducers(state, action);
  return reducers;
};

export default rootReducer;

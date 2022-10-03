import * as actionTypes from "../constants";
import { updateObject } from "../../utils";

const initialState = {
  value: null,
};

const setValue = (state, action) => {
  return updateObject(state, {
    value: "",
  });
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return setValue(state, action);
    default:
      return state;
  }
};

export default example;

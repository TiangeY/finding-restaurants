import { INPUT_CITY_VALUE, INPUT_OTHER_VALUE } from "./search.actions";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case INPUT_CITY_VALUE:
      return action.value;
    default:
      return state;
  }
};

export const refineReducer = (state = "", action) => {
  switch (action.type) {
    case INPUT_OTHER_VALUE:
      return action.value;
    default:
      return state;
  }
};

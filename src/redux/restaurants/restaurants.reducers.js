import { FETCH_RESTAURANTS_SUCCESS } from "./restaurants.actions";

export const restaurants = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return [ ...action.restaurants ];
    default:
      return state;
  }
};
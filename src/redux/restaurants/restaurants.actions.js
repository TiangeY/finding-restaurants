export const FETCH_RESTAURANTS = "restaurants/FETCH_RESTAURANTS";
export const FETCH_RESTAURANTS_SUCCESS =
  "restaurants/FETCH_RESTAURANTS_SUCCESS";

export const fetchRestaurantsAction = (inputValue, refineValue) => ({
  type: FETCH_RESTAURANTS,
  inputValue,
  refineValue,
});

export const fetchRestaurantsSuccessAction = (restaurants) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  restaurants,
});

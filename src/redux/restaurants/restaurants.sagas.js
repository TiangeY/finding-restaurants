import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_RESTAURANTS } from "./restaurants.actions";
import { fetchRestaurantsSuccessAction } from "./restaurants.actions";
import CitiesApi from "../../services/CitiesApi.js";
import RestaurantsApi from "../../services/RestaurantsApi.js";

export function* fetchRestaurants(action) {
  try {
    const cities = yield call(CitiesApi.get, action.inputValue);
    const city = cities.data.location_suggestions[0];
    if (city) {
      if (action.refineValue) {
        const restaurants = yield call(
          RestaurantsApi.get,
          city.id,
          action.refineValue
        );
        yield put(fetchRestaurantsSuccessAction(restaurants.data.restaurants));
      } else {
        const restaurants = yield call(RestaurantsApi.getMore, city.id);
        yield put(fetchRestaurantsSuccessAction(restaurants.data.restaurants));
      }
    } else {
      yield put(fetchRestaurantsSuccessAction([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchRestaurants() {
  yield takeLatest(FETCH_RESTAURANTS, fetchRestaurants);
}

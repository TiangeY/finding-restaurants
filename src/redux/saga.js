import { all } from "redux-saga/effects";
import { watchRestaurants } from "./restaurants/restaurants.sagas";
// import { watchCity } from "./city/city.sagas";

export default function* rootSaga() {
  // yield all([watchRestaurants(), watchCity()]);
  yield all([watchRestaurants(),]);
}

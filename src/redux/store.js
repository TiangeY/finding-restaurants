import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { searchReducer, refineReducer } from "./search/search.reducers";
import { restaurants } from "./restaurants/restaurants.reducers";
// import { cityId } from "./city/city.reducers";

import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  searchInput: searchReducer,
  restaurants: restaurants,
  refineValue: refineReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

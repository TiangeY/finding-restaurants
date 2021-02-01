import { connect } from "react-redux";
import Search from "../components/Search";
import {
  inputCityValueAction,
  inputOtherValueAction,
} from "../redux/search/search.actions";
import { fetchRestaurantsAction } from "../redux/restaurants/restaurants.actions";

const mapStateToProps = (state) => ({
  inputValue: state.searchInput,
  refineValue: state.refineValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputCityValue: (e) => {
    const action = inputCityValueAction(e.target.value);
    dispatch(action);
  },
  handleInputOtherValue: (e) => {
    const action = inputOtherValueAction(e.target.value);
    dispatch(action);
  },
  fetchRestaurants: (inputValue, refineValue) => {
    const action = fetchRestaurantsAction(inputValue, refineValue);
    dispatch(action);
  },
});

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchBar;

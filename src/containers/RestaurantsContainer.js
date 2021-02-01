import { connect } from "react-redux";
import Restaurants from "../components/Restaurants";

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const RestaurantsList = connect(mapStateToProps)(Restaurants);

export default RestaurantsList;

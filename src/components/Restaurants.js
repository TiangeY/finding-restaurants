import React from "react";
import PropTypes from "prop-types";
import thumb from "../img/default-food-image.png";

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.length === 0 ? (
        <div className="no-results">Nothing's Here</div>
      ) : (
        <div className="restaurants-container">
          {restaurants.map((restaurant) => {
            return (
              <div
                className="restaurant-container"
                key={restaurant.restaurant.id}
              >
                <div className="restaurant-thumb">
                  <img src={restaurant.restaurant.thumb || thumb} alt="" />
                </div>
                <div className="restaurant-content">
                  <div>
                    <div className="restaurant-title">
                      {restaurant.restaurant.name}
                    </div>
                    <div className="restaurant-cuisines">
                      {restaurant.restaurant.cuisines}
                    </div>
                  </div>
                  <div className="restaurant-address">
                    {restaurant.restaurant.location.address}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      restaurant: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cuisines: PropTypes.string.isRequired,
        location: PropTypes.shape({
          address: PropTypes.string.isRequired,
        }).isRequired,
      }),
    })
  ).isRequired,
};

export default Restaurants;

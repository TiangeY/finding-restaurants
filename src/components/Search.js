import React from "react";
import PropTypes from "prop-types";

const Search = ({
  inputValue,
  refineValue,
  fetchRestaurants,
  handleInputCityValue,
  handleInputOtherValue,
}) => {
  return (
    <div className="search-container">
      <div>
        <h1 className="search-title">Finding Restaurants</h1>
        <h3 className="search-slogan">
          Discover the best food &amp; drinks in the world
        </h3>
        <form
          id="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            fetchRestaurants(inputValue, refineValue);
          }}
        >
          <div>
            <input
              type="text"
              className="search-city"
              placeholder="City, e.g., Toronto"
              defaultValue={inputValue}
              onChange={handleInputCityValue}
            />
            <input
              type="text"
              className="search-keywords"
              placeholder="Search for any keywords ..."
              defaultValue={refineValue}
              onChange={handleInputOtherValue}
            />
          </div>
          <button className="search-btn" type="submit">
            <svg x="0px" y="0px" viewBox="0 0 384 380.2">
              <path
                d="M377.2,357.6l-81.5-81.5c56.2-65.3,53.4-164.3-8.5-226.2C255.7,18.5,213.9,1.2,169.5,1.2C125,1.2,83.2,18.5,51.8,49.9
	c-64.9,64.9-64.9,170.4,0,235.3C83.2,316.7,125,334,169.5,334c40.3,0,78.3-14.2,108.5-40.2l81.5,81.5c2.4,2.4,5.6,3.7,8.8,3.7
	s6.4-1.2,8.8-3.7C382.1,370.4,382.1,362.5,377.2,357.6z M169.5,309c-37.8,0-73.3-14.7-100-41.4c-55.1-55.1-55.1-144.8,0-200
	c27.6-27.6,63.8-41.3,100-41.3c36.2,0,72.4,13.8,100,41.3c55.1,55.1,55.1,144.8,0,200C242.8,294.3,207.2,309,169.5,309z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  refineValue: PropTypes.string.isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
  handleInputCityValue: PropTypes.func.isRequired,
  handleInputOtherValue: PropTypes.func.isRequired,
};

export default Search;

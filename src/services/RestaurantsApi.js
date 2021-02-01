import axios from "axios";

const RestaurantsApi = {
  async get(id, refineValue) {
    const restaurants = axios({
      method: "GET",
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=${refineValue}`,
      headers: {
        "user-key": "f111df1abdd6e0c868fbefc8428b5137",
        Accept: "application/json",
      },
    });
    return await restaurants;
  },
  
  async getMore(id) {
    const restaurants = axios({
      method: "GET",
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`,
      headers: {
        "user-key": "f111df1abdd6e0c868fbefc8428b5137",
        Accept: "application/json",
      },
    });
    return await restaurants;
  }
};

export default RestaurantsApi;

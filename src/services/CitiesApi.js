import axios from "axios";

const CitiesApi = {
  async get(inputValue) {
    const cities = axios({
      method: "GET",
      url: `https://developers.zomato.com/api/v2.1/cities?q=${inputValue}`,
      headers: {
        "user-key": "f111df1abdd6e0c868fbefc8428b5137",
        Accept: "application/json",
      },
    });
    return await cities;
  },
};

export default CitiesApi;

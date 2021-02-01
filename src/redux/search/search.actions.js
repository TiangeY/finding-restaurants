export const INPUT_CITY_VALUE = "search/INPUT_CITY_VALUE";
export const INPUT_OTHER_VALUE = "search/INPUT_OTHER_VALUE";

export const inputCityValueAction = (value) => ({
  type: INPUT_CITY_VALUE,
  value,
});

export const inputOtherValueAction = (value) => ({
  type: INPUT_OTHER_VALUE,
  value,
});
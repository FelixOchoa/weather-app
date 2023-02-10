import { SEARCH_CITY, SET_SELECTED_CITY, SET_TEMP_UNIT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };

    case SET_TEMP_UNIT:
      return {
        ...state,
        tempUnit: action.payload,
      };

    default:
      return state;
  }
};

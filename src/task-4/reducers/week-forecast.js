import {
    FETCH_WEEK_START,
    FETCH_WEEK_SUCCESS,
    FETCH_WEEK_FAILURE } from "../actions/week-forecast";

const weekForecast = (state = [], action) => {
  if(action.type === FETCH_WEEK_SUCCESS) {
    return action.weekForecast;
  }
  return state;
};

const weekLoading = (state = false, action) => {
    switch (action.type) {
      case FETCH_WEEK_START:
        return true;
      case FETCH_WEEK_FAILURE:
        return false;
      case FETCH_WEEK_SUCCESS:
        return false;
      default:
        return state;
    }
};

const weekError = (state = false, action) => {
  switch (action.type) {
    case FETCH_WEEK_START:
      return false;
    case FETCH_WEEK_FAILURE:
      return true;
    case FETCH_WEEK_SUCCESS:
      return false;
    default:
      return state;
  }
};

export { weekForecast, weekLoading, weekError };

let defaultState = {
  flightInfo: []
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === 'NEW_FLIGHTS') {
    return {
      ...state,
      flightInfo: action.flights
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;

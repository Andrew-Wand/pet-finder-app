const petFinderReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMALS":
      return {
        ...state,
        animals: action.payload,
      };

    default:
      return state;
  }
};

export default petFinderReducer;

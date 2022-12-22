const petFinderReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMALS":
      return {
        ...state,
        animals: action.payload,
      };
    // case "GET_ANIMALS_TYPE":
    //   return {
    //     ...state,
    //     animals: action.payload,
    //   };

    default:
      return state;
  }
};

export default petFinderReducer;

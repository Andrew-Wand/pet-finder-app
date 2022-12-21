import { createContext, useReducer } from "react";
import petFinderReducer from "./petFinderReducer";

const PetFinderContext = createContext();

export const PetFinderProvider = ({ children }) => {
  const initialState = {
    animals: [],
    animal: {},
  };

  const [state, dispatch] = useReducer(petFinderReducer, initialState);

  return (
    <PetFinderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PetFinderContext.Provider>
  );
};

export default PetFinderContext;

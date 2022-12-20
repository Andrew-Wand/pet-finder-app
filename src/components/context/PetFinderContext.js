import { createContext, useReducer } from "react";
import PetFinderReducer from "./PetFinderReducer";

const PetFinderContext = createContext();

export const PetFinderProvider = ({ children }) => {
  const initialState = {
    animals: [],
    animal: {},
  };

  const [state, dispatch] = useReducer(PetFinderReducer, initialState);

  return (
    <PetFinderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PetFinderContext.Provider>
  );
};

export default PetFinderContext;

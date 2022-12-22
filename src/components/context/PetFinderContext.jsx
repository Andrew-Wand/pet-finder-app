import { createContext, useReducer, useEffect } from "react";
import petFinderReducer from "./petFinderReducer";

const PetFinderContext = createContext();

const PETFINDER_URL = import.meta.env.VITE_PETFINDER_URL;
const PETFINDER_TOKEN = import.meta.env.VITE_PETFINDER_TOKEN;

export const PetFinderProvider = ({ children }) => {
  const initialState = {
    animals: [],
    animal: {},
  };

  const [state, dispatch] = useReducer(petFinderReducer, initialState);

  // useEffect(() => {
  //   searchAnimalsType();
  // }, []);

  // Fetch animals (testing)

  const fetchAnimals = async () => {
    const response = await fetch(`${PETFINDER_URL}`, {
      headers: {
        Authorization: `Bearer ${PETFINDER_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: "GET_ANIMALS",
      payload: data.animals,
    });
  };

  // Search animals by type
  const searchAnimalsType = async (text) => {
    const params = new URLSearchParams({
      type: text,
    });

    const response = await fetch(`${PETFINDER_URL}?${params}`, {
      headers: {
        Authorization: `Bearer ${PETFINDER_TOKEN}`,
      },
    });

    const { animals } = await response.json();
    console.log({ animals });
    dispatch({
      type: "GET_ANIMALS",
      payload: animals,
    });
  };

  return (
    <PetFinderContext.Provider
      value={{
        animals: state.animals,
        fetchAnimals,
        dispatch,
        searchAnimalsType,
      }}
    >
      {children}
    </PetFinderContext.Provider>
  );
};

export default PetFinderContext;

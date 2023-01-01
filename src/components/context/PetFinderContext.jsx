import { createContext, useReducer } from "react";
import petFinderReducer from "./petFinderReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const PetFinderContext = createContext();

const PETFINDER_URL = import.meta.env.VITE_PETFINDER_URL;
const PETFINDER_TOKEN = import.meta.env.VITE_PETFINDER_TOKEN;

export const PetFinderProvider = ({ children }) => {
  const initialState = {
    animals: [],
    animal: {},
  };

  const [state, dispatch] = useReducer(petFinderReducer, initialState);

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

    const response = await fetch(`${PETFINDER_URL}/animals?${params}`, {
      headers: {
        Authorization: `Bearer ${PETFINDER_TOKEN}`,
      },
    });

    const { animals } = await response.json();
    dispatch({
      type: "GET_ANIMALS",
      payload: animals,
    });
  };

  // Get a single animal
  const getAnimal = async (id) => {
    const response = await fetch(`${PETFINDER_URL}/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${PETFINDER_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const animalData = await response.json();
      return { animal: animalData.animal };
    }
  };

  // Wishlist stuff
  const [wishListArr, setWishListArr] = useLocalStorage("wishListArr", []);

  const addToWishlist = (item) => {
    setWishListArr([item, ...wishListArr]);
  };

  const removeFromWishlist = (id) => {
    setWishListArr(wishListArr.filter((item) => item.id !== id));
  };

  //remove duplicates
  let uniqueWishlist = Array.from(new Set(wishListArr.map((a) => a.id))).map(
    (id) => {
      return wishListArr.find((a) => a.id === id);
    }
  );

  return (
    <PetFinderContext.Provider
      value={{
        ...state,
        fetchAnimals,
        dispatch,
        searchAnimalsType,
        getAnimal,
        addToWishlist,
        removeFromWishlist,
        wishListArr,
        uniqueWishlist,
      }}
    >
      {children}
    </PetFinderContext.Provider>
  );
};

export default PetFinderContext;

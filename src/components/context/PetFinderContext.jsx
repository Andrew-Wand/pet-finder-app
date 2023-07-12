import { createContext, useReducer, useState } from "react";
import petFinderReducer from "./PetFinderReducer.js";
import useLocalStorage from "../hooks/useLocalStorage";

const PetFinderContext = createContext();

const PETFINDER_URL = import.meta.env.VITE_PETFINDER_URL;
const PETFINDER_TOKEN = import.meta.env.VITE_PETFINDER_TOKEN;

const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;

let token, tokenType, expires;

export const PetFinderProvider = ({ children }) => {
  const initialState = {
    animalsArray: [],
    animalPage: {},
    inWishlist: [],
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
        Authorization: `Bearer ` + token,

        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const { animals } = await response.json();
    setAnimals(animals);
    dispatch({
      type: "GET_ANIMALS",
      payload: animals,
    });
  };

  // Get a single animal
  const getAnimal = async (id) => {
    const response = await fetch(`${PETFINDER_URL}/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const animalData = await response.json();
      return { animal: animalData.animal };
    }
  };

  // OAuth
  let getOAuth = async function () {
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        API_KEY +
        "&client_secret=" +
        API_SECRET,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the API data
        console.log("token", data);

        // Store token data
        token = data.access_token;
        tokenType = data.token_type;
        expires = new Date().getTime() + data.expires_in * 1000;
      })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  };

  const makeCall = (text) => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
      console.log("new call");
      getOAuth().then(function () {
        searchAnimalsType(text);
      });
      return;
    }

    // Otherwise, get pets
    console.log("from cache");
    searchAnimalsType(text);
  };

  // Wishlist stuff
  const [wishListArr, setWishListArr] = useLocalStorage("wishListArr", []);
  const [wishlist, setWishlist] = useState(false);

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

  // Pagination stuff
  const [animals, setAnimals] = useLocalStorage("animals", []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = animals.slice(firstPostIndex, lastPostIndex);
  const totalPosts = animals.length;

  // Sorting stuff
  const [sortState, setSortState] = useState("DEFAULT");

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
        totalPosts,
        currentPost,
        postPerPage,
        currentPage,
        setCurrentPage,
        sortState,
        setSortState,
        animals,
        wishlist,
        setWishlist,
        makeCall,
      }}
    >
      {children}
    </PetFinderContext.Provider>
  );
};

export default PetFinderContext;

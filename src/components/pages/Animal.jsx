import { useEffect, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { useParams } from "react-router-dom";
import Flickity from "react-flickity-component";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useLocalStorage from "../hooks/useLocalStorage";

function Animal({ animal }) {
  const {
    getAnimal,
    animalPage,
    dispatch,
    wishlist,
    uniqueWishlist,
    addToWishlist,
    removeFromWishlist,
  } = useContext(PetFinderContext);

  const params = useParams();

  useEffect(() => {
    const getAnimalData = async () => {
      const animalData = await getAnimal(params.id);

      dispatch({ type: "GET_ANIMAL", payload: animalData });
    };

    getAnimalData();
  }, [dispatch, params.id]);

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
  };

  // Wishlist submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const wishItem = {
      id: animalPage.animal.id,
      name: animalPage.animal.name,
      img: animalPage.animal.photos,
      gender: animalPage.animal.gender,
      age: animalPage.animal.age,
      breed: animalPage.animal.breeds.primary,
      description: animalPage.animal.description,
      checked: profileWishlist,
    };

    if (wishItem.checked === false) {
      addToWishlist(wishItem);
    } else {
      removeFromWishlist(animalPage.animal.id);
    }
    setProfileWishlist(!profileWishlist);
  };

  const isFound = uniqueWishlist.some((element) => {
    if (element.id === animalPage.animal?.id) {
      return true;
    }
    return false;
  });

  const [profileWishlist, setProfileWishlist] = useLocalStorage(
    "profileWishlist",
    isFound
  );

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-8 h-[75vh] w-full rounded-xl p-5 drop-shadow-xl relative"
      data-theme="valentine"
    >
      <div className="flex">
        <div className="ml-5">
          <div className="flex items-center gap-5">
            <h2 className="text-5xl mb-3 card-title text-red-300 ">
              {animalPage.animal?.name}
              <form onSubmit={handleSubmit}>
                <button type="submit">
                  {isFound ? (
                    <i className="wishlist-icon-container absolute bottom-8 right-7 text-5xl">
                      <AiFillHeart />
                    </i>
                  ) : (
                    <i className="wishlist-icon-container absolute bottom-8 right-7 text-5xl">
                      <AiOutlineHeart />
                    </i>
                  )}
                </button>
              </form>
            </h2>

            <div>
              <p className="badge badge-secondary badge-outline">
                {animalPage.animal?.breeds.primary}
              </p>
              <p
                className={
                  animalPage.animal?.gender === "Male"
                    ? "badge badge-primary ml-2 p-2.5"
                    : "badge badge-secondary ml-2 p-2.5"
                }
              >
                {animalPage.animal?.gender}
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="ml-0 w-full lg:w-[40rem]  rounded-xl">
            {animalPage.animal?.photos.length > 2 ? (
              <Flickity options={flickityOptions}>
                {animalPage.animal?.photos.map((item, index) => (
                  <img
                    key={index}
                    className="petCarousel-body-slide h-80 rounded shadow-xl"
                    src={item.medium}
                    alt="animal"
                  />
                ))}
              </Flickity>
            ) : (
              <figure>
                <img className="max-w-xs rounded-lg shadow-xl" alt="animal" />
              </figure>
            )}
          </div>

          <div
            className="card shadow-lg h-[25%] w-[43%] items-center flex justify-center absolute  bottom-[4rem] border-2"
            data-theme="valentine"
          >
            <div className="card-title   mb-6 text-2xl ">
              Interested in <span className="">{animalPage.animal?.name}</span>?
            </div>
            <div className="justify-evenly w-full flex">
              <button
                onClick={(e) => onClick(e)}
                className="py-2 px-5 rounded-xl mb-5 shadow-lg hover:shadow-xl  border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Add To Wishlist <i className="fa-regular fa-heart px-2 py-3" />
              </button>
              <div className="divider">
                <i className="fa-solid fa-worm text-indigo-400"></i>
              </div>
              <label
                htmlFor="adopt-modal"
                className="py-2 cursor-pointer flex items-center px-10 rounded-xl mb-5 shadow-lg hover:shadow-xl  border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Begin Inquiry
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded border-2 shadow-lg">
        <h2 className="font-bold mt-10 text-3xl  underline text-center">
          A Little About Me...
        </h2>
        <div className="m-10">
          <div>
            <h1 className="text-2xl font-bold mb-2 underline ">Personality</h1>
            <p className="grid grid-cols-2">
              {animalPage.animal?.tags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>

            <div className="grid grid-cols-2">
              <li
                className={
                  animalPage.animal?.environment.cats ? "" : "list-none"
                }
              >
                {animalPage.animal?.environment.cats
                  ? "I love cats"
                  : "I'm not a big fan of cats"
                  ? animalPage.animal?.environment.dogs == null
                  : ""}
              </li>

              <li
                className={
                  animalPage.animal?.environment.children ? "" : "list-none"
                }
              >
                {animalPage.animal?.environment.children
                  ? "I love kids!"
                  : "I'm a little afraid of kids"
                  ? animalPage.animal?.environment.dogs == null
                  : ""}
              </li>
              <li
                className={
                  animalPage.animal?.environment.dogs ? "" : "list-none"
                }
              >
                {animalPage.animal?.environment.dogs
                  ? "I get along with dogs too!"
                  : "I'm not a big fan of dogs"
                  ? animalPage.animal?.environment.dogs == null
                  : ""}
              </li>
            </div>
          </div>

          <div className="divider">
            <i className="fa-solid fa-paw"></i>
          </div>

          <div>
            <h1 className="text-2xl underline  font-bold">Details</h1>
            <div className="flex flex-col justify-between h-[10rem]	 mt-3">
              <p className="">
                {animalPage.animal?.name} is
                <span className=" font-bold">
                  {animalPage.animal?.attributes.house_trained
                    ? " house trained"
                    : " not yet house trained"}
                </span>
              </p>

              <p className="">
                Vaccines/shots are
                <span className=" font-bold">
                  {animalPage.animal?.attributes.shots_current
                    ? " fully up to date!"
                    : " not yet up to date."}
                </span>
              </p>

              <p className="">
                {animalPage.animal?.name} has
                <span className=" font-bold">
                  {animalPage.animal?.attributes.spayed_neutered
                    ? " been spayed/neutered"
                    : " not yet been spayed/neutered"}
                </span>
              </p>

              <p className="">
                {animalPage.animal?.attributes.special_needs
                  ? "Special Needs"
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;

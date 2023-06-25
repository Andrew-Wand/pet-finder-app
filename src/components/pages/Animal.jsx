import { useEffect, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-8 xl:h-[75vh] w-full rounded-xl p-5 drop-shadow-xl relative"
      data-theme="valentine"
    >
      <div className="flex">
        <div className="ml-5">
          <div className="flex items-center gap-5">
            <h2 className="xl:text-5xl text-3xl mb-3 card-title text-red-300 ">
              {animalPage.animal?.name}
            </h2>

            <div>
              <p className="badge badge-secondary badge-outline">
                {animalPage.animal?.breeds.primary}
              </p>
              <p
                className={
                  animalPage.animal?.gender === "Male"
                    ? "badge badge-accent ml-2 p-2.5"
                    : "badge badge-primary ml-2 p-2.5"
                }
              >
                {animalPage.animal?.gender}
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="ml-0 w-full lg:w-[40rem] mt-5">
            {animalPage.animal?.photos.length > 2 ? (
              <Flickity options={flickityOptions}>
                {animalPage.animal?.photos.map((item, index) => (
                  <img
                    key={index}
                    className="petCarousel-body-slide xl:h-[160px] xl:w-[50%] shadow-xl mr-[10px]"
                    src={item.large}
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
          {/* END CAROUSEL */}
          <div
            className="card shadow-2xl xl:h-[17%] xl:w-[43%] items-center flex justify-center xl:absolute bottom-[30px] bg-[#81567C] xl:right-[40px] mt-10"
            data-theme="valentine"
          >
            <div className="card-title mb-6 text-2xl text-gray-200">
              Interested in
              <span className="text-red-300">{animalPage.animal?.name}</span>?
            </div>
            <div className="justify-center w-full flex">
              <label
                htmlFor="adopt-modal"
                className="py-2 cursor-pointer flex items-center px-10 rounded-xl mb-5 shadow-lg hover:shadow-xl border-2 border-orange-300 hover:border-orange-300 hover:bg-orange-100 text-gray-200 hover:text-black"
              >
                Begin Inquiry
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-xl bg-[#FFFDE4] mt-5">
        <form onSubmit={handleSubmit}>
          <button type="submit">
            {isFound ? (
              <i className="wishlist-icon-container absolute top-5 right-4 xl:top-8 xl:right-10 text-6xl text-red-300">
                <AiFillHeart />
              </i>
            ) : (
              <i className="wishlist-icon-container absolute xl:top-8 xl:right-10 text-6xl text-red-300">
                <AiOutlineHeart />
              </i>
            )}
          </button>
        </form>
        <h2 className="mt-2 xl:text-5xl text-3xl text-center underline text-red-300">
          About {animalPage.animal?.name}
        </h2>

        <div className="m-10">
          <div>
            <h1 className="xl:text-2xl text-lg font-bold mb-2 underline ">
              Personality
            </h1>
            <p className="grid xl:grid-cols-2 grid-cols-2">
              {animalPage.animal?.tags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>

            <div className="grid grid-cols-1">
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
            <h1 className="text-lg xl:text-2xl underline  font-bold">
              Details
            </h1>
            <div className="flex flex-col justify-between xl:h-[6rem] mt-3">
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
        {/* MODAL */}
        <input type="checkbox" id="adopt-modal" className="modal-toggle" />
        <form
          className="modal modal-bottom sm:modal-middle"
          onSubmit={() => navigate("/adoption-request")}
        >
          <div className="modal-box">
            <h1 className="font-bold text-3xl text-center text-red-400">
              Adoption Request Form
            </h1>
            <div className="flex flex-col p-4 m-1">
              <label className="text-xl my-3 ">Name:</label>
              <input
                required
                className="p-2 rounded-xl"
                type="text"
                placeholder="Enter name here..."
              />

              <label className="text-xl my-4">Email:</label>
              <input
                required
                className="p-2 rounded-xl"
                type="email"
                placeholder="Enter email here..."
              />

              <label className="text-xl my-4">Phone Number:</label>
              <input
                required
                className="p-2 rounded-xl"
                type="text"
                placeholder="(999)-999-9999"
              />

              <label className="text-xl my-3">Description of Home:</label>
              <textarea
                required
                className="textarea resize-none border-2 text-sm p-2"
                data-theme="light"
              ></textarea>
            </div>
            <div className="modal-action">
              <label htmlFor="adopt-modal" className="btn">
                Close
              </label>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Animal;

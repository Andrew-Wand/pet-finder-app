import { useContext } from "react";
import { Link } from "react-router-dom";
import PawPrint from "../../assets/pawprint.png";
import PetFinderContext from "../context/PetFinderContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "animate.css";

function AnimalItem({ animal }) {
  const {
    addToWishlist,
    removeFromWishlist,
    wishlist,
    setWishlist,
    uniqueWishlist,
  } = useContext(PetFinderContext);

  const isFound = uniqueWishlist.some((element) => {
    if (element.id === animal.id) {
      return true;
    }

    return false;
  });

  let backgroundImage =
    animal.photos.length > 0 ? animal.photos[0].large : PawPrint;

  const handleSubmit = (e) => {
    e.preventDefault();
    const wishItem = {
      id: animal.id,
      name: animal.name,
      img: animal.photos,
      gender: animal.gender,
      age: animal.age,
      breed: animal.breeds.primary,
      description: animal.description,
      checked: wishlist,
    };

    if (wishItem.checked === false) {
      animal.clicked = true;
      addToWishlist(wishItem);
    } else {
      animal.clicked = false;
      removeFromWishlist(animal.id);
    }
    setWishlist(!wishlist);
  };

  return (
    <div
      className="card shadow-xl w-[21rem] h-[21rem] xl:h-80 xl:w-[30rem] animate__animated animate__fadeIn ml-8 mb-10 xl:mb-0 hover:scale-105 transition-transform ease-out duration-300  "
      data-theme="valentine"
    >
      <div className="avatar max-h-56">
        <figure className="rounded w-40 h-40 m-5">
          <img src={backgroundImage} alt="Animal" />
        </figure>
        <div className="card-title relative">
          <h2
            className={
              animal.name.length > 10
                ? " truncate text-xl text-zinc-700 mt-2 "
                : "xl:text-4xl text-2xl text-zinc-700 mt-4"
            }
          >
            {animal.name}
          </h2>
          <p
            className={
              animal.gender === "Male"
                ? "badge badge-accent"
                : "badge badge-primary"
            }
          >
            {animal.gender}
          </p>

          <p className="badge badge-outline ml-2">{animal.age}</p>
          <div className="mt-2 ml-1">
            <h1
              className={
                animal.breeds.primary.length > 15 ? "text-sm" : "text-xl"
              }
            >
              {animal.breeds.primary}
            </h1>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="card-body relative">
        <div className="card-actions justify-center">
          <Link
            className="btn btn-accent absolute bottom-8 left-12 xl:left-24 btn-md xl:btn-wide rounded-lg text-lg shadow-lg"
            to={`/animals/${animal.id}`}
          >
            View Pet
          </Link>

          <form onSubmit={handleSubmit}>
            <button type="submit">
              {isFound ? (
                <i className="wishlist-icon-container absolute right-12 bottom-8 xl:bottom-8 xl:right-7 text-5xl">
                  <AiFillHeart />
                </i>
              ) : (
                <i className="wishlist-icon-container absolute right-12 bottom-8 xl:bottom-8 xl:right-7 text-5xl">
                  <AiOutlineHeart />
                </i>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnimalItem;

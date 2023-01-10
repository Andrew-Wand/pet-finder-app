import { useContext } from "react";
import { Link } from "react-router-dom";
import PetFinderContext from "../context/PetFinderContext";
import PawPrint from "../../assets/pawprint.png";
import { AiFillHeart } from "react-icons/ai";
import "animate.css";

function WishlistItem({ item }) {
  const { removeFromWishlist } = useContext(PetFinderContext);

  let backgroundImage = item.img.length > 0 ? item.img[0].large : PawPrint;

  return (
    <div
      className="card shadow-xl h-80 xl:w-[30rem] animate__animated animate__fadeIn "
      data-theme="valentine"
    >
      <div className="avatar">
        <figure className="rounded w-40 h-40 m-5">
          <img src={backgroundImage} alt="Animal" />
        </figure>
        <div className="card-title ">
          <h2
            className={
              item.name.length > 10
                ? "text-xl text-zinc-700 mt-2"
                : "text-4xl text-zinc-700 mt-4"
            }
          >
            {item.name}
          </h2>
          <p
            className={
              item.gender === "Male"
                ? "badge badge-accent"
                : "badge badge-primary"
            }
          >
            {item.gender}
          </p>

          <p className="badge badge-neutral badge-outline ml-2">{item.age}</p>
          <div className="mt-2 ml-1">
            <h1 className={item.breed.length > 15 ? "text-sm" : "text-xl"}>
              {item.breed}
            </h1>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="card-body relative">
        <div className="card-actions justify-center">
          <Link
            className="btn btn-accent absolute bottom-8 left-10 xl:left-20 btn-wide rounded-lg text-lg shadow-lg"
            to={`/animals/${item.id}`}
          >
            View Pet
          </Link>

          <form>
            <button type="submit" onClick={() => removeFromWishlist(item.id)}>
              <i className="wishlist-icon-container absolute bottom-8 right-7 text-5xl ">
                <AiFillHeart />
              </i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;

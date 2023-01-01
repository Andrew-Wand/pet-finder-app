import { useContext } from "react";
import { Link } from "react-router-dom";
import PetFinderContext from "../context/PetFinderContext";
import PawPrint from "../../assets/pawprint.png";

function WishlistItem({ item }) {
  const { removeFromWishlist } = useContext(PetFinderContext);

  let backgroundImage = item.img.length > 0 ? item.img[0].large : PawPrint;

  console.log(item);
  return (
    <div className="card shadow-xl h-80" style={{ backgroundColor: "#2E7290" }}>
      <div className="avatar">
        <figure className="rounded w-40 h-40 m-5">
          <img src={backgroundImage} alt="Animal" />
        </figure>
        <div className="card-title ">
          <h2
            className={
              item.name.length > 10
                ? "text-xl text-zinc-900 mt-2"
                : "text-4xl text-zinc-900 mt-4"
            }
          >
            {item.name}
          </h2>
          <p
            className={
              item.gender === "Male"
                ? "badge badge-accent"
                : "badge badge-secondary"
            }
          >
            {item.gender}
          </p>

          <p className="badge badge-neutral badge-outline ml-2 text-rose-50">
            {item.age}
          </p>
          <div className="mt-2 ml-1">
            <h1
              className={
                item.breed.length > 15
                  ? "text-sm text-rose-50"
                  : "text-xl text-rose-50"
              }
            >
              {item.breed}
            </h1>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="card-body relative">
        <div className="card-actions justify-center">
          <Link
            className="btn btn-accent absolute bottom-8 btn-wide rounded-lg text-lg shadow-lg"
            to={`/animals/${item.id}`}
          >
            View Pet
          </Link>

          <form>
            <button type="submit" onClick={() => removeFromWishlist(item.id)}>
              <div className="wishlist-icon-container absolute bottom-12 right-5 text-rose-200">
                derp
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;

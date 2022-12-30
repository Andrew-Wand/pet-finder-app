import { Link } from "react-router-dom";
import PawPrint from "../../assets/pawprint.png";

function AnimalItem({ animal }) {
  let backgroundImage =
    animal.photos.length > 0 ? animal.photos[0].large : PawPrint;

  return (
    <div className="card shadow-xl h-80" style={{ backgroundColor: "#2E7290" }}>
      <div className="avatar">
        <figure className="rounded w-40 h-40 m-5">
          <img src={backgroundImage} alt="Animal" />
        </figure>
        <div className="card-title ">
          <h2
            className={
              animal.name.length > 10
                ? "text-xl text-zinc-900 mt-2"
                : "text-4xl text-zinc-900 mt-4"
            }
          >
            {animal.name}
          </h2>
          <p
            className={
              animal.gender === "Male"
                ? "badge badge-accent"
                : "badge badge-secondary"
            }
          >
            {animal.gender}
          </p>

          <p className="badge badge-neutral badge-outline ml-2 text-rose-50">
            {animal.age}
          </p>
          <div className="mt-2 ml-1">
            <h1
              className={
                animal.breeds.primary.length > 15
                  ? "text-sm text-rose-50"
                  : "text-xl text-rose-50"
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
            className="btn btn-accent absolute bottom-8 btn-wide rounded-lg text-lg shadow-lg"
            to={`/animals/${animal.id}`}
          >
            View Pet
          </Link>
          <div className="wishlist-icon-container absolute bottom-12 right-5">
            <button type="submit">derp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalItem;

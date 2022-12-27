import { Link } from "react-router-dom";
import PawPrint from "../../assets/pawprint.png";

function AnimalItem({ animal }) {
  let backgroundImage =
    animal.photos.length > 0 ? animal.photos[0].large : PawPrint;

  return (
    <div className="card shadow-xl h-80" style={{ backgroundColor: "#525965" }}>
      <div>
        <div className="avatar">
          <figure className="rounded w-40 h-40 m-5">
            <img src={backgroundImage} alt="Animal" />
          </figure>
          <h2 className="card-title text-4xl text-zinc-50 ">{animal.name}</h2>
        </div>
      </div>

      <div className="card-body">
        <div>
          <p>animal description</p>
        </div>

        <div className="card-actions">
          <Link className="btn bg-neutral-700 " to={`/animals/${animal.id}`}>
            View Pet
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnimalItem;

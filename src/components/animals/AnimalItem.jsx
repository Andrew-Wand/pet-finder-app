import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";

function AnimalItem({ animal }) {
  let backgroundImage = animal.photos.length > 0 ? animal.photos[0].medium : "";

  console.log(animal);
  return (
    <div>
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={backgroundImage} alt="ldjf" />
                {/* <i>{FaCat}</i> */}
              </div>
            </div>
          </div>

          <div>
            <h2 className="card-title">{animal.name}</h2>
            <Link className="text-base-content text-opacity-40" to={`/animal/`}>
              View Pet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalItem;

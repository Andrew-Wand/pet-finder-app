import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { Link } from "react-router-dom";

function Sorting() {
  const { setSortState } = useContext(PetFinderContext);

  return (
    <div className="p-5 xl:flex xl:justify-between">
      <div className="flex align-start ml-5 p-2">
        <Link
          to="/"
          className="btn btn-accent rounded-btn btn-md xl:text-lg shadow-xl"
        >
          Back To Home
        </Link>
      </div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
        className="select select-bordered max-w-xs xl:text-xl mt-5 xl:mt-2 ml-4"
        data-theme="valentine"
      >
        <option value="DEFAULT">None</option>
        <option value="ascending">Ascending (A-Z Sort)</option>
        <option value="descending">Descending (Z-A Sort)</option>
      </select>
    </div>
  );
}

export default Sorting;

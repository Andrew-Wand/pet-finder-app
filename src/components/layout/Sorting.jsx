import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { Link } from "react-router-dom";

function Sorting() {
  const { setSortState } = useContext(PetFinderContext);

  return (
    <div className="p-5 flex justify-between">
      <div className="flex align-start ml-5 p-2">
        <Link to="/" className="btn btn-accent rounded-btn text-lg shadow-xl">
          Back To Home
        </Link>
      </div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
        className="select select-bordered max-w-xs text-xl"
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

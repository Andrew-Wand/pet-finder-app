import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";

function Sorting() {
  const { setSortState } = useContext(PetFinderContext);

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
        className="select select-bordered max-w-xs"
        data-theme="valentine"
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Ascending (A-Z Sort)</option>
        <option value="descending">Descending (Z-A Sort)</option>
      </select>
    </div>
  );
}

export default Sorting;

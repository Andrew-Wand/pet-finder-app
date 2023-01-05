import { useState, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";

function Sorting({ nameData }) {
  const { sortState, setSortState } = useContext(PetFinderContext);

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Ascending (A-Z Sort)</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;

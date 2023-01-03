import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import AnimalItem from "./AnimalItem";
import Pagination from "../layout/Pagination";

function AnimalResults() {
  const { currentPost } = useContext(PetFinderContext);

  return (
    <div className="results-wrapper">
      <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10">
        {currentPost?.map((animal) => (
          <div>
            <AnimalItem key={animal.id} animal={animal} />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default AnimalResults;

import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import AnimalItem from "./AnimalItem";
import Pagination from "../layout/Pagination";

function AnimalResults() {
  const { currentPost } = useContext(PetFinderContext);

  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 p-20">
      {currentPost?.map((animal) => (
        <div>
          <AnimalItem key={animal.id} animal={animal} />
        </div>
      ))}
      <Pagination />
    </div>
  );
}

export default AnimalResults;

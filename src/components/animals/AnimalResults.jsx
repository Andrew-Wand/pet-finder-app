import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import AnimalItem from "./AnimalItem";

function AnimalResults() {
  const { animals } = useContext(PetFinderContext);

  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
      {animals?.map((animal) => (
        <div>
          <AnimalItem key={animal.id} animal={animal} />
        </div>
      ))}
    </div>
  );
}

export default AnimalResults;

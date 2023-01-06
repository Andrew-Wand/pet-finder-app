import { useContext, useEffect } from "react";
import PetFinderContext from "../context/PetFinderContext";
import AnimalItem from "./AnimalItem";
import Pagination from "../layout/Pagination";
import Sorting from "../layout/Sorting";

function AnimalResults() {
  const { currentPost, sortState } = useContext(PetFinderContext);

  // Sort functions
  const strAscending = [...currentPost]
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((animal) => {
      return (
        <div>
          <AnimalItem key={animal.id} animal={animal} />
        </div>
      );
    });

  const strDescending = [...currentPost]
    .sort((a, b) => (a.name > b.name ? -1 : 1))
    .map((animal) => {
      return (
        <div>
          <AnimalItem key={animal.id} animal={animal} />
        </div>
      );
    });

  // Sort rendering
  if (sortState === "DEFAULT") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          {currentPost?.map((animal) => (
            <div>
              <AnimalItem key={animal.id} animal={animal} />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    );
  } else if (sortState === "ascending") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
          {strAscending}
        </div>
        <Pagination />
      </div>
    );
  } else if (sortState === "descending") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
          {strDescending}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default AnimalResults;

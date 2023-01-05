import { useContext, useEffect } from "react";
import PetFinderContext from "../context/PetFinderContext";
import AnimalItem from "./AnimalItem";
import Pagination from "../layout/Pagination";
import Sorting from "../layout/Sorting";

function AnimalResults() {
  const { currentPost, sortState, setSortState } = useContext(PetFinderContext);

  // useEffect(() => {
  //   const names = currentPost.map((item) => {
  //     const derp = item.name;
  //     return derp;
  //   });

  //   console.log(names.sort());
  // }, []);

  // const nameData = currentPost.map((item) => {
  //   const nameArray = item.name;
  //   return nameArray;
  // });

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

  if (sortState === "none") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
          {currentPost?.map((animal) => (
            <div>
              <AnimalItem key={animal.id} animal={animal} />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (sortState === "ascending") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
          {strAscending}
        </div>
      </div>
    );
  } else if (sortState === "descending") {
    return (
      <div className="results-wrapper">
        <Sorting />
        <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
          {strDescending}
        </div>
      </div>
    );
  }

  return (
    <div className="results-wrapper">
      <Sorting />
      {/* <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
        {currentPost?.map((animal) => (
          <div>
            <AnimalItem key={animal.id} animal={animal} />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 gap-24 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 pb-10 ">
        {sortState === "none"}
        {/* {[...currentPost]
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((animal) => {
            return (
              <div>
                <AnimalItem key={animal.id} animal={animal} />
              </div>
            );
          })} */}

        {/* {currentPost?.map((animal) => (
          <div>
            <AnimalItem key={animal.id} animal={animal} />
          </div>
        ))} */}
      </div>
      <Pagination />
    </div>
  );
}

export default AnimalResults;

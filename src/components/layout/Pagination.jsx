import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";

function Pagination() {
  const { postPerPage, totalPosts, setCurrentPage, currentPage } =
    useContext(PetFinderContext);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div
        className="bg-transparent flex justify-center xl:ml-40 p-8"
        data-theme="valentine"
      >
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage
                  ? "btn btn-secondary px-8"
                  : "btn btn-primary px-8"
              }
              key={index}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;

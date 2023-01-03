import AnimalResults from "../animals/AnimalResults";
import ScrollToTop from "react-scroll-to-top";
import { HiArrowUp } from "react-icons/hi";

function Search() {
  return (
    <div className="w-full mt-10">
      <AnimalResults />
      <ScrollToTop
        smooth
        component={
          <HiArrowUp style={{ fontSize: "30px", marginLeft: "5px" }} />
        }
        style={{ fontSize: "30px", backgroundColor: "#f0d6e8" }}
      />
    </div>
  );
}

export default Search;

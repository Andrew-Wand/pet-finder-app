import { useState, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { FaDog, FaCat } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";

function AnimalSearch() {
  const [text, setText] = useState("");

  const { animals, dispatch, searchAnimalsType } = useContext(PetFinderContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      window.alert("derp!");
    } else {
      searchAnimalsType(text);
    }

    setText("");
  };

  const searchType = async (e) => {
    e.preventDefault();
    searchAnimalsType(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-row justify-center">
          <button
            onClick={searchType}
            value="dog"
            className="dog-btn btn btn-md w-20 mx-5"
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            value="cat"
            className="dog-btn btn btn-md w-20 mx-5"
          >
            <FaCat />
          </button>

          <button
            onClick={searchType}
            value="rabbit"
            className="dog-btn btn btn-md w-20 mx-5"
          >
            <GiRabbit />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimalSearch;

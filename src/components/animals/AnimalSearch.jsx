import { useState, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { FaDog, FaCat, FaHorse, FaCrow } from "react-icons/fa";
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
      <div data-theme="pastel" style={{ backgroundColor: "#2a303c" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black shadow-lg focus:outline-none"
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

        {/* Buttons below input and drop down menu */}
        <div className="flex flex-row justify-center mt-5">
          <button
            onClick={searchType}
            value="dog"
            className="btn btn-md w-20 mx-5 rounded-lg"
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            value="cat"
            className="btn btn-md w-20 mx-5 rounded-lg"
          >
            <FaCat />
          </button>

          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-md w-20 mx-5 rounded-lg ">
              Other
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[21rem] flex flex-row justify-evenly"
            >
              <li>
                <button
                  onClick={searchType}
                  value="horse"
                  className="btn btn-md w-20"
                >
                  <FaHorse />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="bird"
                  className="btn btn-md w-20 rounded-lg "
                >
                  <FaCrow />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="rabbit"
                  className="btn btn-md w-20 rounded-lg "
                >
                  <GiRabbit />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalSearch;

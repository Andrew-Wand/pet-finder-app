import { useState, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { FaDog, FaCat, FaHorse, FaCrow } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "animate.css";

function AnimalSearch() {
  const [text, setText] = useState("");

  const { searchAnimalsType } = useContext(PetFinderContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/search");

    if (text === "") {
      window.alert("derp!");
    } else {
      searchAnimalsType(text);
    }

    setText("");
  };

  const searchType = async (e) => {
    navigate("/search");
    searchAnimalsType(e.target.value);
  };

  return (
    <div className="w-6/12 lg:w-full mt-48">
      <div data-theme="pastel" style={{ backgroundColor: "#ffffff" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-rose-100 input input-lg text-black shadow-lg focus:outline-none "
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-secondary btn-lg"
                // style={{ backgroundColor: "#ffffff" }}
                data-theme="cupcake"
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
            className="animate__animated animate__fadeInDown badge badge-secondary badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl "
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            value="cat"
            className="animate__animated animate__fadeInDown badge badge-secondary badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl"
          >
            <FaCat />
          </button>

          <div className="dropdown ">
            <label
              tabIndex={0}
              className="animate__animated animate__fadeInDown badge badge-secondary badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-2xl cursor-pointer"
            >
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

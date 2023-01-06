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
    <div className="w-6/12 lg:w-full mt-48 align-center">
      <div data-theme="pastel" className="bg-transparent">
        {/* <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative animate__animated animate__fadeIn ">
              <input
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-rose-100 input input-lg text-black shadow-lg focus:outline-none  "
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-secondary btn-lg "
                data-theme="cupcake"
              >
                Go
              </button>
            </div>
          </div>
        </form> */}

        {/* Buttons below input and drop down menu */}
        <div className="flex flex-row justify-center mt-24 bg-[#F9C9EB]/60 p-8 rounded-xl drop-shadow-lg">
          <button
            onClick={searchType}
            value="dog"
            className="animate__animated animate__fadeInLeft animate__delay-3s badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl"
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            value="cat"
            className="animate__animated animate__fadeInLeft animate__delay-2s badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl"
          >
            <FaCat />
          </button>

          {/* DROPDOWN FOR OTHER */}

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="animate__animated animate__fadeInLeft animate__delay-1s badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-2xl cursor-pointer"
            >
              Other
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-5 rounded-box w-[34rem] flex flex-row justify-evenly mt-10 bg-transparent"
            >
              <li>
                <button
                  onClick={searchType}
                  value="horse"
                  className=" badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl cursor-pointer"
                >
                  <FaHorse />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="bird"
                  className="badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl cursor-pointer"
                >
                  <FaCrow />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="rabbit"
                  className="badge text-rose-400 badge-outline hover:bg-rose-100 w-32 h-24 mx-5 rounded-lg text-5xl cursor-pointer"
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

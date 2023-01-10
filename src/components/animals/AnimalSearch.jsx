import { useState, useContext, useRef } from "react";
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

  const [dropClass, setDropClass] = useState(false);

  const buttonRef = useRef(null);

  const handleDrop = () => {
    if (dropClass) {
      buttonRef.current.blur();
    } else {
      buttonRef.current.focus();
    }

    setDropClass(!dropClass);
  };

  return (
    <div className="w-full lg:w-full mt-48 align-center">
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
        <div
          className={
            dropClass
              ? "flex flex-row justify-center mt-12 bg-[#F9C9EB]/90 p-8 rounded-xl shadow-xl search-icons active"
              : "flex flex-row justify-center mt-12 bg-[#F9C9EB]/90 p-8 rounded-xl shadow-xl search-icons "
          }
        >
          <button
            onClick={searchType}
            value="dog"
            className="animate__animated animate__fadeInLeft animate__delay-3s badge text-rose-400 badge-outline hover:bg-rose-100 w-[5rem] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 mx-2 rounded-lg text-5xl shadow-md"
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            value="cat"
            className="animate__animated animate__fadeInLeft animate__delay-2s badge text-rose-400 badge-outline hover:bg-rose-100 w-[5rem] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 mx-2 rounded-lg text-5xl shadow-md"
          >
            <FaCat />
          </button>

          {/* DROPDOWN FOR OTHER */}

          <div
            className={
              dropClass
                ? "dropdown dropdown-open flex"
                : "dropdown dropdown-end flex"
            }
          >
            <label
              tabIndex={0}
              className="animate__animated animate__fadeInLeft animate__delay-1s badge text-rose-700 badge-outline hover:bg-rose-100 w-[4rem] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 mx-2 rounded-lg lg:text-2xl cursor-pointer shadow-md"
              onClick={handleDrop}
              ref={buttonRef}
            >
              Other
            </label>

            <ul
              tabIndex={0}
              className=" dropdown-content flex justify-evenly mt-10 absolute top-20 left-[-160px] xl:left-[-338px] "
            >
              <li>
                <button
                  onClick={searchType}
                  value="horse"
                  className=" animate__animated animate__fadeIn badge text-rose-400 badge-outline hover:bg-rose-100 w-[68px] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 rounded-lg text-5xl cursor-pointer mr-2 shadow-md"
                >
                  <FaHorse />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="bird"
                  className="badge text-rose-400 badge-outline hover:bg-rose-100 w-[68px] h-[5rem] lg:w-32 lg:h-24 lg:mx-5  rounded-lg text-5xl cursor-pointer mx-2 shadow-md"
                >
                  <FaCrow />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="rabbit"
                  className="badge text-rose-400 badge-outline hover:bg-rose-100 w-[68px] h-[5rem] lg:w-32 lg:h-24 lg:mx-5  rounded-lg text-5xl cursor-pointer mx-2 shadow-md"
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

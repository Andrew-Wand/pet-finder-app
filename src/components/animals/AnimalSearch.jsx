import { useState, useContext, useRef } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { FaDog, FaCat, FaHorse, FaCrow } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "animate.css";

function AnimalSearch() {
  const { makeCall } = useContext(PetFinderContext);

  const navigate = useNavigate();

  const searchType = async (e) => {
    navigate("/search");
    makeCall(e.target.value);
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
            aria-label="click to search for dogs"
            className="animate__animated animate__fadeInLeft animate__delay-3s badge text-rose-400 badge-outline hover:bg-rose-100 w-[5rem] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 mx-2 rounded-lg text-5xl shadow-md"
          >
            <FaDog />
          </button>
          <button
            onClick={searchType}
            aria-label="click to search for cats"
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
                  aria-label="click to search for horses"
                  className=" animate__animated animate__fadeIn badge text-rose-400 badge-outline hover:bg-rose-100 w-[68px] h-[5rem] lg:w-32 lg:h-24 lg:mx-5 rounded-lg text-5xl cursor-pointer mr-2 shadow-md"
                >
                  <FaHorse />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="bird"
                  aria-label="click to search for birds"
                  className="badge text-rose-400 badge-outline hover:bg-rose-100 w-[68px] h-[5rem] lg:w-32 lg:h-24 lg:mx-5  rounded-lg text-5xl cursor-pointer mx-2 shadow-md"
                >
                  <FaCrow />
                </button>
              </li>
              <li>
                <button
                  onClick={searchType}
                  value="rabbit"
                  aria-label="click to search for rabbits"
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

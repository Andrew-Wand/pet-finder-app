import { useState, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";

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
      // dispatch({ type: "GET_ANIMALS_TYPE", payload: animals });
    }

    setText("");
  };
  // dispatch({ type: "GET_ANIMALS", payload: animals });

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
      </div>
    </div>
  );
}

export default AnimalSearch;

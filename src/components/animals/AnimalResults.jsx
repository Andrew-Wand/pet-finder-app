import { useEffect, useContext, useState } from "react";
import PetFinderContext from "../context/PetFinderContext";

function AnimalResults() {
  // const { animals, dispatch } = useContext(PetFinderContext);

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_PETFINDER_URL}/animals`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PETFINDER_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    setAnimals(data.animals);
  };

  console.log(animals);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {animals.map((animal) => (
        <div>
          {/* <figure>
            <img src={animal.photos} alt="" />
          </figure> */}
          <h3>{animal.coat}</h3>
        </div>
      ))}
    </div>
  );
}

export default AnimalResults;

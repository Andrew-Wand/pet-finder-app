import { useEffect, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { useParams } from "react-router-dom";
import PawPrint from "../../assets/pawprint.png";
import Flickity from "react-flickity-component";

function Animal() {
  const { getAnimal, animal, dispatch } = useContext(PetFinderContext);

  const params = useParams();

  useEffect(() => {
    const getAnimalData = async () => {
      const animalData = await getAnimal(params.id);

      dispatch({ type: "GET_ANIMAL", payload: animalData });
    };

    getAnimalData();
  }, [dispatch, params.id]);

  const flickityOptions = {
    initialIndex: 0,
  };

  return (
    <div>
      <h1>{animal.animal?.name}</h1>

      <Flickity flickityOptions={flickityOptions}>
        {animal.animal?.photos.map((item, index) => (
          <img className="petCarousel-body-slide" src={item.medium} alt="" />
        ))}
      </Flickity>

      {/* // <ul>
      //   {animal.animal?.photos.map((item, index) => (
      //     <li key={index}>
      //       <img src={item.medium} alt="" />
      //     </li>
      //   ))}
      // </ul> */}
    </div>
  );
}

export default Animal;

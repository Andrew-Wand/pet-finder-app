import { useEffect, useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { useParams } from "react-router-dom";
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
    wrapAround: true,
  };

  return (
    <div>
      <h1>{animal.animal?.name}</h1>
      <div className="carousel-wrapper">
        <Flickity options={flickityOptions}>
          {animal.animal?.photos.map((item, index) => (
            <img className="petCarousel-body-slide" src={item.large} alt="" />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

export default Animal;

import AnimalSearch from "../animals/AnimalSearch";
import AnimalResults from "../animals/AnimalResults";
import homeImg from "../../assets/animalshome.jpg";

function Home() {
  return (
    <div className="home-wrapper flex justify-evenly ">
      <AnimalSearch />
      <div className="ml-48">
        <figure>
          <img className="home-img object-cover" src={homeImg} alt="Pets" />
        </figure>
      </div>
    </div>
  );
}

export default Home;

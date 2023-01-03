import AnimalSearch from "../animals/AnimalSearch";
import homeImg from "../../assets/animalshome.jpg";
import homeImgTrans from "../../assets/animalshometransparent.png";
import "animate.css";

function Home() {
  return (
    <div className="home-wrapper flex justify-evenly relative">
      <div className="home-title absolute left-32 top-24 cursor-default">
        <h1 className="text-5xl animate__animated animate__fadeIn">
          Welcome to Petopia!
        </h1>
      </div>

      <AnimalSearch />
      <div className="ml-48 animate__animated animate__fadeIn">
        <figure>
          <img
            className="home-img object-cover "
            src={homeImgTrans}
            alt="Pets"
          />
        </figure>
      </div>
    </div>
  );
}

export default Home;

import AnimalSearch from "../animals/AnimalSearch";
import homeImg from "../../assets/animalshome.jpg";
import homeImgTrans from "../../assets/animalshometransparent.png";
import "animate.css";

function Home() {
  return (
    <div className="home-wrapper flex justify-evenly relative bg-[#FFFEDD] p-10 rounded-3xl shadow-2xl">
      <div className="home-title absolute left-24 top-20 cursor-default">
        <h1 className="text-6xl animate__animated animate__fadeIn">
          Welcome to Petopia!
        </h1>
        <p
          className="text-lg mt-10 alert p-5 justify-center drop-shadow-lg w-10/12 ml-10"
          data-theme="valentine"
        >
          Choose a category and find your next pet!
        </p>
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

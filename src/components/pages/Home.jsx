import AnimalSearch from "../animals/AnimalSearch";
import homeImg from "../../assets/animalshome.jpg";
import homeImgTrans from "../../assets/animalshometransparent2.webp";
import "animate.css";

function Home() {
  return (
    <div className="home-wrapper flex justify-evenly relative bg-[#FFFEDD] p-10 lg:p-10 rounded-3xl shadow-2xl">
      <div className="home-title absolute lg:left-24 lg:top-20 cursor-default">
        <h1 className="lg:text-6xl text-4xl animate__animated animate__fadeIn text-center">
          Welcome to Petopia!
        </h1>
        <p
          className="text-lg mt-10 alert p-5 justify-center drop-shadow-lg lg:w-10/12 lg:ml-10"
          data-theme="valentine"
        >
          Choose a category and find your next pet!
        </p>
      </div>

      <AnimalSearch />
      <div className="ml-48 animate__animated animate__fadeIn hidden lg:block">
        <figure>
          <img
            className="home-img lg:object-cover invisibility"
            src={homeImgTrans}
            alt="Pets"
          />
        </figure>
      </div>
    </div>
  );
}

export default Home;

import { useNavigate } from "react-router-dom";
import PetParty from "../../assets/pet-party.jpg";

function FormComplete() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-wrapper flex justify-evenly relative bg-[#FFFEDD] p-10 rounded-3xl shadow-2xl">
        <div className="home-title cursor-default p-10">
          <h1 className="text-3xl w-full text-center ml-10">
            Thank you for your inquiry!
          </h1>
          <p
            className="text-lg mt-10 alert p-5 justify-center drop-shadow-lg text-center ml-10"
            data-theme="valentine"
          >
            Your message has been received. We'll get back to you as soon as we
            can!
          </p>

          <button
            className="btn btn-lg shadow-xl mt-20 ml-[140px]"
            data-theme="valentine"
            onClick={() => navigate("/")}
          >
            Return To Home
          </button>
        </div>

        <div className="ml-48">
          <figure>
            <img
              className="home-img object-cover rounded-xl shadow-xl"
              src={PetParty}
              alt="Pets"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default FormComplete;

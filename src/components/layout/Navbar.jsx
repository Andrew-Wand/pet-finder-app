import { Link } from "react-router-dom";
import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";
import { FaRegHeart } from "react-icons/fa";
import { GiPawHeart } from "react-icons/gi";

function Navbar({ title }) {
  const { uniqueWishlist } = useContext(PetFinderContext);

  return (
    <nav className="navbar h-32 mb-12 shadow-md bg-rose-200 min-h-[8rem]">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2 relative">
          <Link
            to="/"
            className="text-7xl align-middle underline"
            style={{ color: "#F98391" }}
          >
            <GiPawHeart
              className="absolute left-[260px] z-0 rotate-[17deg]"
              style={{ color: "#F98391" }}
            />
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn text-2xl">
              Home
            </Link>

            <Link to="/wishlist" className="btn btn-ghost btn-sm">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary ">
                  {uniqueWishlist.length}
                </span>
                <i className="text-3xl">
                  <FaRegHeart />
                </i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

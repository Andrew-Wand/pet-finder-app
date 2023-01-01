import { Link } from "react-router-dom";
import { useContext } from "react";
import PetFinderContext from "../context/PetFinderContext";

function Navbar({ title }) {
  const { uniqueWishlist } = useContext(PetFinderContext);

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/wishlist" className="btn btn-ghost btn-sm rounded-btn">
              Wishlist ({uniqueWishlist.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

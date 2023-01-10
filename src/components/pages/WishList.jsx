import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WishlistItem from "../animals/WishlistItem";
import PetFinderContext from "../context/PetFinderContext";

function Wishlist() {
  const { uniqueWishlist } = useContext(PetFinderContext);

  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        {uniqueWishlist.length > 0 ? (
          uniqueWishlist?.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))
        ) : (
          <div className="bg-[#FFFEDD] h-96 rounded-xl shadow-2xl  flex flex-col p-10 justify-evenly">
            <div>
              <h1 className="text-3xl text-center">
                You don't have anything on your wishlist!
              </h1>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary w-4/12 hover:bg-[#fff]"
                data-theme="valentine"
                onClick={() => navigate("/")}
              >
                Back To Home
              </button>
            </div>
          </div>
        )}

        {/* {uniqueWishlist?.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))} */}
      </div>
    </div>
  );
}

export default Wishlist;

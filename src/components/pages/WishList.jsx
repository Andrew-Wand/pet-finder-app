import { useContext } from "react";
import WishlistItem from "../animals/WishlistItem";
import PetFinderContext from "../context/PetFinderContext";

function Wishlist() {
  const { uniqueWishlist } = useContext(PetFinderContext);

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        {uniqueWishlist?.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;

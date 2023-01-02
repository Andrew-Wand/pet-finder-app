import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WishList from "./components/pages/WishList";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { PetFinderProvider } from "./components/context/PetFinderContext";
import Animal from "./components/pages/Animal";
import Search from "./components/pages/Search";

function App() {
  return (
    <PetFinderProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title={"Pet-opia"} />

          <main className=" mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/search" element={<Search />} />
              <Route path="/animals/:id" element={<Animal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PetFinderProvider>
  );
}

export default App;

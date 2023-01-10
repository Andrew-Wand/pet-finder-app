import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WishList from "./components/pages/WishList";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { PetFinderProvider } from "./components/context/PetFinderContext";
import Animal from "./components/pages/Animal";
import Search from "./components/pages/Search";
import ScrollToTop from "react-scroll-to-top";
import { HiArrowUp } from "react-icons/hi";
import FormComplete from "./components/pages/FormComplete";

function App() {
  return (
    <PetFinderProvider>
      <Router>
        <div className="flex flex-col justify-between">
          <Navbar title={"Petopia"} />

          <main className="lg:container px-3 pb-12 lg:ml-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/adoption-request" element={<FormComplete />} />
              <Route path="/search" element={<Search />} />
              <Route path="/animals/:id" element={<Animal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop
              smooth
              component={
                <HiArrowUp
                  style={{ fontSize: "30px", marginLeft: "5px", color: "#fff" }}
                />
              }
              style={{ fontSize: "30px", backgroundColor: "#000" }}
            />
          </main>
          <Footer />
        </div>
      </Router>
    </PetFinderProvider>
  );
}

export default App;

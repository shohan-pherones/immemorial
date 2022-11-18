import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="featured" element={<Featured />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

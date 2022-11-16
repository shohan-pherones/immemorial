import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;

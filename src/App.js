import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

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

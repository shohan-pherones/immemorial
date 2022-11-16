import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
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

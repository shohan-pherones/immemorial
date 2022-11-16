import About from "./components/About";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Featured />
      <About />
    </div>
  );
};

export default App;

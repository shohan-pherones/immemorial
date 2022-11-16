import { useRef } from "react";
import { useGsapShutterUnveil } from "../hooks/gsap";

const Hero = () => {
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const heroRef = useRef(null);

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.25, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;

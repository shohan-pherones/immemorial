import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useGsapDownBuffering } from "../hooks/gsap";

const About = ({ minHeight }) => {
  const buffer1 = useRef(null);
  const buffer2 = useRef(null);
  const buffer3 = useRef(null);
  const buffer4 = useRef(null);
  const buffer5 = useRef(null);
  const buffer6 = useRef(null);
  const buffer7 = useRef(null);
  const buffer8 = useRef(null);
  const buffer9 = useRef(null);
  const buffer10 = useRef(null);

  const bufferArr = [
    buffer1,
    buffer2,
    buffer3,
    buffer4,
    buffer5,
    buffer6,
    buffer7,
    buffer8,
    buffer9,
    buffer10,
  ];

  useGsapDownBuffering(bufferArr);

  return (
    <section
      className="about"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" needMargin={true} />
      <p>
        Explore the lost treasures and shining stars of the 1990s! Find your
        favorite cartoons, TV shows, music albums, & more with easy filtering
        functionality. With Immemorial, stay up-to-date with all your 90s
        favorites while turning back time.
      </p>
      <p>
        What's the only era that never seems to end? The 90s! Journey through
        appreciating items from 90s TV, music, and art. See if you remember old
        toys, cartoons, or prints of such. Indulge in some nostalgia before our
        world falls back into the dark ages.
      </p>
      <div className="buffers">
        <div className="buffer" ref={buffer1}></div>
        <div className="buffer" ref={buffer2}></div>
        <div className="buffer" ref={buffer3}></div>
        <div className="buffer" ref={buffer4}></div>
        <div className="buffer" ref={buffer5}></div>
        <div className="buffer" ref={buffer6}></div>
        <div className="buffer" ref={buffer7}></div>
        <div className="buffer" ref={buffer8}></div>
        <div className="buffer" ref={buffer9}></div>
        <div className="buffer" ref={buffer10}></div>
      </div>
    </section>
  );
};

export default About;

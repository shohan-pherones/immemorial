import { useRef } from "react";
import { useGsapDownStagger, useGsapUpward } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const fav = useRef(null);
  const logo = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [fav];

  useGsapDownStagger(liArr);
  useGsapDownStagger(favArr);
  useGsapUpward(logo);

  return (
    <div className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <a href="#">Featured</a>
        </li>
        <li ref={li2}>
          <a href="#">About</a>
        </li>
        <li ref={li3}>
          <a href="#">Gallery</a>
        </li>
      </ul>
      <div className="logo" ref={logo}>
        <h2>Immemorial</h2>
      </div>
      <div className="favourite-link" ref={fav}>
        <a href="#">Favourites</a>
      </div>
    </div>
  );
};

export default Navbar;

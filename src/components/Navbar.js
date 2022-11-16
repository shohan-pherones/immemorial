const Navbar = () => {
  return (
    <div className="navbar wrapper">
      <ul className="links">
        <li>
          <a href="#">Featured</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
      <div className="logo">
        <h2>Immemorial</h2>
      </div>
      <div className="favourite-link">
        <a href="#">Favourites</a>
      </div>
    </div>
  );
};

export default Navbar;

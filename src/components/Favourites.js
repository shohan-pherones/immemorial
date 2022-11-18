const Favourites = ({ minHeight }) => {
  return (
    <section
      className="favourites wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      Favourites
    </section>
  );
};

export default Favourites;

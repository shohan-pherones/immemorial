import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <section className="featured wrapper">
      <SectionTitle title="Featured" />
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>90's Telephone</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo of Woman in Denim Jacket Holding Red Telephone"
          />
        </div>
        <div className="featured-right">
          <span>90's Cassette Player</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women Sitting Together on the Floor"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;

import photos from "../utils/data";

const Featured = () => {
  const [firstUrl, secondUrl] = photos;

  return (
    <section className="featured-wrapper">
      <div className="featured-row-layout">
        <h6>Clock</h6>
        <img src={firstUrl} alt="Silver Framed Analog Wall Clock" />
      </div>
      <div className="featured-col-layout">
        <h6>Telephone</h6>
        <img src={secondUrl} alt="Vintage Telephone on Wall" />
      </div>
    </section>
  );
};

export default Featured;

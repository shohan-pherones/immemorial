const GalleryItem = ({ src, title, category }) => {
  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title">{title}</h1>
      <p className="gallery-item-category">{category}</p>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="gallery-item-image"
      ></div>
    </div>
  );
};

export default GalleryItem;

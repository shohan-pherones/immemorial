const SectionTitle = ({ title, needMargin = false }) => {
  const optionalMarginStyles = {
    margin: needMargin ? "0 5vw" : null,
  };

  return (
    <h6 className="section-title" style={optionalMarginStyles}>
      {title}
    </h6>
  );
};

export default SectionTitle;

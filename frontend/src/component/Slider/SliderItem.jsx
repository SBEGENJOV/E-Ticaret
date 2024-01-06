import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc.img} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">{imageSrc.name}</p>
        <h2 className="slider-heading">{imageSrc.name}</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.object  ,
};
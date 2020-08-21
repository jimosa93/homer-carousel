import React from 'react';
import Slider from 'react-slick';

const CarouselView = ({
  carouselImages,
  slidesToShow,
  setSlidesToShow,
  setImageView
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    focusOnSelect: true,
    swipe: false,
    touchMove: false
  };
  return (
    <div>
      <div className="row mb-3">
        <div className="input-group col-lg-6">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Slides to show
            </label>
          </div>
          <select
            className="custom-select"
            onChange={e => {
              setSlidesToShow(parseInt(e.target.value));
            }}
            defaultValue={slidesToShow}
          >
            <option value="2">2</option>
            {carouselImages.length > 2 && <option value="3">3</option>}
            {carouselImages.length > 3 && <option value="4">4</option>}
            {carouselImages.length > 4 && <option value="5">5</option>}
          </select>
        </div>
      </div>
      <Slider {...settings}>
        {carouselImages.map((image, i) => (
          <div key={i} onClick={() => setImageView(image)}>
            <img src={`/carouselImages/${image.imageName}`} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselView;

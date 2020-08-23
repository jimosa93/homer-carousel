import React, { useContext } from 'react';
import Slider from 'react-slick';
import { GlobalContext } from '../context/GlobalState';

const CarouselView = ({ setImageView, slidesToShow, setSlidesToShow }) => {
  const { carouselImages } = useContext(GlobalContext);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow
  };
  return (
    <div className="row">
      <div className="col mb-3">
        {carouselImages.length > 1 && (
          <div className="input-group col-lg-3">
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
              value={slidesToShow}
            >
              <option value="2">2</option>
              {carouselImages.length > 2 && <option value="3">3</option>}
              {carouselImages.length > 3 && <option value="4">4</option>}
              {carouselImages.length > 4 && <option value="5">5</option>}
            </select>
          </div>
        )}
      </div>
      <div className="w-100"></div>
      <div className="col">
        <Slider {...settings}>
          {carouselImages.map((image, i) => (
            <div key={i} onClick={() => setImageView(image)}>
              <div className="slide-img">
                <img src={`/carouselImages/${image.imageName}`} alt="" />
              </div>
              <div className="slide-caption">{image.imageCaption}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselView;

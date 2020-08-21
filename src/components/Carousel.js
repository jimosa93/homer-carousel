import React, { useState, useEffect } from 'react';
import CarouselView from './CarouselView';
import CarouselEdit from './CarouselEdit';
import ImageViewer from './ImageViewer';

const Carousel = props => {
  const { carouselImages } = props;
  let slidesImages = 3;
  if (carouselImages.length < 3) slidesImages = carouselImages.length;

  const [mode, setMode] = useState('View');
  const [slidesToShow, setSlidesToShow] = useState(slidesImages);
  const [imageView, setImageView] = useState({});

  useEffect(() => {
    setSlidesToShow(slidesImages);
  }, [carouselImages]);

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <div className="d-flex justify-content-end">
            {mode === 'View' ? (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => setMode('Edit')}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => setMode('View')}
              >
                View
              </button>
            )}
          </div>
        </div>
      </div>
      {mode === 'View' ? (
        <>
          <CarouselView
            carouselImages={carouselImages}
            slidesToShow={slidesToShow}
            setSlidesToShow={setSlidesToShow}
            setImageView={setImageView}
          />
          {Object.entries(imageView).length !== 0 && (
            <ImageViewer imageView={imageView} />
          )}
        </>
      ) : (
        <CarouselEdit
          {...props}
          imageView={imageView}
          setImageView={setImageView}
        />
      )}
    </div>
  );
};

export default Carousel;

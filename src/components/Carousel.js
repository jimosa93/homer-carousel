import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CarouselView from './CarouselView';
import CarouselEdit from './CarouselEdit';
import ImageViewer from './ImageViewer';

const Carousel = () => {
  const { carouselImages } = useContext(GlobalContext);
  let slides = carouselImages.length < 3 ? carouselImages.length : 3;
  const [slidesToShow, setSlidesToShow] = useState(slides);
  const [mode, setMode] = useState('View');
  const [imageView, setImageView] = useState({});

  useEffect(() => {
    setSlidesToShow(slides);
    // eslint-disable-next-line
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
            slidesToShow={slidesToShow}
            setSlidesToShow={setSlidesToShow}
            setImageView={setImageView}
          />
          {Object.entries(imageView).length !== 0 && (
            <>
              <ImageViewer imageView={imageView} />
            </>
          )}
        </>
      ) : (
        <CarouselEdit imageView={imageView} setImageView={setImageView} />
      )}
    </div>
  );
};

export default Carousel;

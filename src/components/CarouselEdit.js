import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CarouselEdit = ({ setImageView }) => {
  const { carouselImages, deleteImagesFromCarousel } = useContext(
    GlobalContext
  );
  const [tempDeletedImages, setTempDeletedImages] = useState(carouselImages);
  const [enableDeleteButton, setEnableAddButton] = useState(false);

  useEffect(() => {
    setTempDeletedImages(carouselImages);
  }, [carouselImages]);

  const toggleSelectImage = i => {
    const newImages = tempDeletedImages.map(a => ({ ...a }));
    newImages[i].selected = !newImages[i].selected;
    setTempDeletedImages(newImages);
    if (newImages.some(image => image.selected)) setEnableAddButton(true);
    else setEnableAddButton(false);
  };

  const deleteImages = () => {
    deleteImagesFromCarousel(tempDeletedImages);
    setTempDeletedImages(carouselImages);
    setEnableAddButton(false);
    setImageView({});
  };

  return (
    <div className="image-selector mb-5">
      <div className="row">
        {tempDeletedImages.map((image, i) => {
          let itemClass = 'item ' + (image.selected ? 'selected' : '');
          return (
            <div
              className={itemClass}
              key={i}
              onClick={() => toggleSelectImage(i)}
            >
              <img src={`/carouselImages/${image.imageName}`} alt="" />
              <div className="item-body">{image.imageCaption}</div>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="btn btn-lg btn-primary"
        onClick={() => deleteImages()}
        disabled={!enableDeleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default CarouselEdit;

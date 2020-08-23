import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ImageSelector = () => {
  const { imageGallery, addImagesToCarousel } = useContext(GlobalContext);

  const [tempImageGallery, setTempImageGallery] = useState(imageGallery);
  const [enableAddButton, setEnableAddButton] = useState(false);

  useEffect(() => {
    setTempImageGallery(imageGallery);
  }, [imageGallery]);

  const toggleSelectImage = i => {
    const newImages = [...tempImageGallery];
    newImages[i].selected = !newImages[i].selected;
    setTempImageGallery(newImages);
    if (tempImageGallery.some(image => image.selected))
      setEnableAddButton(true);
    else setEnableAddButton(false);
  };

  const addImages = () => {
    addImagesToCarousel(tempImageGallery);
    setEnableAddButton(false);
  };

  return (
    <div className="row image-selector mb-5 border pt-2 pb-2">
      <div className="col">
        {imageGallery.length > 0 ? (
          <div className="alert alert-primary" role="alert">
            Select images from gallery to add to carousel
          </div>
        ) : (
          <div class="alert alert-warning" role="alert">
            No images available
          </div>
        )}
      </div>
      <div className="w-100"></div>
      <div className="col">
        {tempImageGallery.map((image, i) => {
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
      <div className="w-100"></div>
      <div className="col mt-2">
        {imageGallery.length > 0 && (
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => addImages()}
            disabled={!enableAddButton}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSelector;

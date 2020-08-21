import React, { useState, useEffect } from 'react';

const ImageSelector = ({
  selectableImages,
  setSelectableImages,
  setCarouselImages,
  carouselImages
}) => {
  const imagesList = selectableImages.map(image => ({
    ...image,
    selected: false
  }));

  const [tempSelectableImages, setTempSelectableImages] = useState(imagesList);
  const [enableAddButton, setEnableAddButton] = useState(false);

  useEffect(() => {
    setTempSelectableImages(selectableImages);
  }, [selectableImages]);

  const toggleSelectImage = i => {
    const newImages = [...tempSelectableImages];
    newImages[i].selected = !newImages[i].selected;
    setTempSelectableImages(newImages);
    if (tempSelectableImages.some(image => image.selected))
      setEnableAddButton(true);
    else setEnableAddButton(false);
  };

  const addImages = () => {
    const addedImages = tempSelectableImages.filter(image => image.selected);
    const removeImagesFromList = tempSelectableImages.filter(
      image => !image.selected
    );
    addedImages.map(image => {
      delete image.selected;
      return image;
    });
    setSelectableImages(removeImagesFromList);
    setCarouselImages([...carouselImages, ...addedImages]);
    setEnableAddButton(false);
  };

  return (
    <div className="image-selector mb-5">
      <div className="row">
        {tempSelectableImages.map((image, i) => {
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
        onClick={() => addImages()}
        disabled={!enableAddButton}
      >
        Add
      </button>
    </div>
  );
};

export default ImageSelector;

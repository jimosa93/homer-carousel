import React, { useState, useEffect } from 'react';

const CarouselEdit = ({
  carouselImages,
  setCarouselImages,
  selectableImages,
  setSelectableImages,
  setImageView
}) => {
  const imagesList = carouselImages.map(image => ({
    ...image,
    selected: false
  }));

  const [tempDeletedImages, setTempDeletedImages] = useState(imagesList);
  const [enableDeleteButton, setEnableAddButton] = useState(false);

  useEffect(() => {
    setTempDeletedImages(carouselImages);
  }, [carouselImages]);

  const toggleSelectImage = i => {
    // console.log(carouselImages);
    const newImages = [...tempDeletedImages];
    newImages[i].selected = !newImages[i].selected;
    setTempDeletedImages(newImages);
    if (tempDeletedImages.some(image => image.selected))
      setEnableAddButton(true);
    else setEnableAddButton(false);
  };

  const deleteImages = () => {
    const deletedImages = tempDeletedImages.filter(image => image.selected);
    const removeImagesFromList = tempDeletedImages.filter(
      image => !image.selected
    );
    deletedImages.map(image => {
      delete image.selected;
      return image;
    });
    setSelectableImages([...selectableImages, ...deletedImages]);
    setCarouselImages(removeImagesFromList);
    setTempDeletedImages(removeImagesFromList);
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

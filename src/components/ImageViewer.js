import React from 'react';

const ImageViewer = ({ imageView }) => {
  return (
    <div className="image-viewer row pt-5">
      <div className="image-container">
        <img src={`/carouselImages/${imageView.imageName}`} alt="" />
        <p>{imageView.imageCaption}</p>
      </div>
    </div>
  );
};

export default ImageViewer;

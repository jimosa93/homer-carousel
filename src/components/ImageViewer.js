import React, { useEffect, useRef } from 'react';

const ImageViewer = ({ imageView }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [imageView]);
  return (
    <div className="image-viewer row pt-5">
      <div className="image-container" ref={scrollRef}>
        <img src={`/carouselImages/${imageView.imageName}`} alt="" />
        <p>{imageView.imageCaption}</p>
      </div>
    </div>
  );
};

export default ImageViewer;

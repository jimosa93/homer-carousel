import React, { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import ImageSelector from './components/ImageSelector';
import { carouselImages as imagesData } from './data/carouselImages.json';

const alphabeticalOrder = ar =>
  ar.sort((a, b) => a.imageCaption.localeCompare(b.imageCaption));

function App() {
  const images = alphabeticalOrder(imagesData);
  const [selectableImages, setSelectableImages] = useState(images);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    setSelectableImages(alphabeticalOrder(selectableImages));
  }, [selectableImages]);

  useEffect(() => {
    setCarouselImages(alphabeticalOrder(carouselImages));
  }, [carouselImages]);

  return (
    <div className="container pb-5">
      <h1>Homer Carousel</h1>
      <ImageSelector
        carouselImages={carouselImages}
        selectableImages={selectableImages}
        setSelectableImages={setSelectableImages}
        setCarouselImages={setCarouselImages}
      />
      {carouselImages.length > 0 && (
        <Carousel
          carouselImages={carouselImages}
          setCarouselImages={setCarouselImages}
          selectableImages={selectableImages}
          setSelectableImages={setSelectableImages}
        />
      )}
    </div>
  );
}

export default App;

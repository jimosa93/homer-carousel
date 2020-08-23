import React, { useContext } from 'react';
import './App.css';

import Carousel from './components/Carousel';
import ImageSelector from './components/ImageSelector';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { carouselImages } = useContext(GlobalContext);

  return (
    <div className="container pb-5">
      <h1 className="text-center text-primary">Homer Carousel</h1>
      <ImageSelector />
      {carouselImages.length > 0 && <Carousel />}
    </div>
  );
}

export default App;

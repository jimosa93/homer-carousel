import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { carouselImages as imagesData } from '../data/carouselImages.json';
import { orderImagesBy } from '../Helper';
import {
  ADD_IMAGES_TO_CAROUSEL,
  DELETE_IMAGES_FROM_CAROUSEL
} from '../constants/carouselConstants';

const orderedImages = orderImagesBy(imagesData, 'imageCaption');

// Initial state
const initialState = {
  imageGallery: orderedImages,
  carouselImages: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addImagesToCarousel = images => {
    dispatch({ type: ADD_IMAGES_TO_CAROUSEL, payload: images });
  };
  const deleteImagesFromCarousel = images => {
    dispatch({ type: DELETE_IMAGES_FROM_CAROUSEL, payload: images });
  };

  return (
    <GlobalContext.Provider
      value={{
        imageGallery: state.imageGallery,
        carouselImages: state.carouselImages,
        addImagesToCarousel,
        deleteImagesFromCarousel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

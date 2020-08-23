import { orderImagesBy, filteredImages } from '../Helper';
import {
  ADD_IMAGES_TO_CAROUSEL,
  DELETE_IMAGES_FROM_CAROUSEL
} from '../constants/carouselConstants';

export default (state, action) => {
  switch (action.type) {
    case ADD_IMAGES_TO_CAROUSEL: {
      const imageGallery = action.payload
        .filter(image => !image.selected)
        .map(image => ({
          ...image,
          selected: false
        }));
      let carouselImages = filteredImages(action.payload);
      carouselImages = orderImagesBy(
        [...state.carouselImages, ...carouselImages],
        'imageCaption'
      );
      return {
        ...state,
        imageGallery,
        carouselImages
      };
    }
    case DELETE_IMAGES_FROM_CAROUSEL: {
      const carouselImages = action.payload.filter(image => !image.selected);
      let imageGallery = filteredImages(action.payload);
      imageGallery = orderImagesBy(
        [...state.imageGallery, ...imageGallery],
        'imageCaption'
      );
      return {
        ...state,
        imageGallery,
        carouselImages
      };
    }
    default:
      return state;
  }
};

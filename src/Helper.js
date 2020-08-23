const orderImagesBy = (ar, item) =>
  ar.sort((a, b) => a[item].localeCompare(b[item]));

const filteredImages = arrayImages =>
  arrayImages
    .filter(image => image.selected)
    .map(image => {
      delete image.selected;
      return image;
    });

export { orderImagesBy, filteredImages };

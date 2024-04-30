import { renderPicturesGallery } from './open-close.js';
import { setUserFormSubmit, imgUploadClose } from './form.js';
import { filterInit } from './filter.js';
import { showErrorMessage } from './utils.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Parameter is not a number!');
    }
  })
  .then((gallery) => {
    filterInit(gallery, renderPicturesGallery);
  })
  .catch(() => {
    showErrorMessage('Error!!!')
  });

setUserFormSubmit(imgUploadClose);

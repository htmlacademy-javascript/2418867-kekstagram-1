import { renderPicturesGallery } from './open-close.js';
import { setUserFormSubmit, imgUploadClose } from './form.js';
import { filterInit } from './filter.js';
import { showErrorMessage } from './utils.js';
import { ALERT_ERROR_TEXT } from './constant.js';
import './upload-img.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(ALERT_ERROR_TEXT);
    }
  })
  .then((gallery) => {
    filterInit(gallery, renderPicturesGallery);
  })
  .catch(() => {
    showErrorMessage(ALERT_ERROR_TEXT);
  });

setUserFormSubmit(imgUploadClose);

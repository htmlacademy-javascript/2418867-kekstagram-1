import { renderPicturesGallery } from './open-close.js';
import { setUserFormSubmit, imgUploadClose } from './form.js';
import { filterInit } from './filter.js';
import { showErrorMessage } from './utils.js';
import { ALERT_ERROR_TEXT, GET_URL } from './constant.js';
import './upload-img.js';

fetch(GET_URL)
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

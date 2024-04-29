import {renderPicturesGallery} from './open-close.js';
import { setUserFormSubmit, imgUploadClose, ImgFiltersInactive } from './form.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((gallery) => {
    renderPicturesGallery(gallery);
    ImgFiltersInactive.classList.remove('img-filters--inactive');
  });

setUserFormSubmit(imgUploadClose);

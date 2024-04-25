import {renderPicturesGallery} from './open-close.js';
import './form.js';
import './slider.js';
import { setUserFormSubmit, imgUploadClose } from './form.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((gallery) => {
    renderPicturesGallery(gallery);
  });

setUserFormSubmit(imgUploadClose);

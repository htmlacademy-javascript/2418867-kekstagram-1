import {fullPicture} from './fullPreview.js';
import {renderGallery} from './render-gallery.js';

const picturesContainer = document.querySelector('.pictures');

export const renderPicturesGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const photo = evt.target.closest('[data-photo-element-id]');

    if (!photo) {
      return;
    }

    evt.preventDefault();

    const picture = pictures.find (
      (item) => item.id === +photo.dataset.photoElementId
    );
    fullPicture(picture);
  });

  renderGallery(pictures);
};

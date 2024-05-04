import { fullPicture } from './fullPreview.js';
import { renderGallery } from './render-gallery.js';

const picturesContainer = document.querySelector('.pictures');

const localPictures = [];

export const renderPicturesGallery = (pictures) => {
  localPictures.length = 0;
  localPictures.push(...pictures.slice());

  renderGallery(localPictures);

};

picturesContainer.addEventListener('click', (evt) => {

  const photo = evt.target.closest('[data-photo-element-id]');

  if (!photo) {
    return;
  }

  evt.preventDefault();

  const picture = localPictures.find(
    (item) => item.id === Number(photo.dataset.photoElementId)
  );

  fullPicture(picture);
});


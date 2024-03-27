import {createGallery} from './data.js';

const picturesContainerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPhotoElement = (photo) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;

  return photoElement;
};

const renderGallery = (gallery) => {
  const galleryFragment = document.createDocumentFragment();

  gallery.forEach((photo) => {
    galleryFragment.append(createPhotoElement(photo));
  });

  picturesContainerElement.append(galleryFragment);
};

renderGallery(createGallery(4));

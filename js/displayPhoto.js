import {createGallery} from './data.js';

const picturesContainerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const addingGallery = createGallery(10);

addingGallery.forEach((gallery) => {
  const galleryElement = pictureTemplate.cloneNode(true);
  galleryElement.querySelector('.picture__img').src = `${gallery.url}`;
  galleryElement.querySelector('.picture__img').alt = `${gallery.description}`;

  for(const comments of gallery.comments){
    galleryElement.querySelector('.picture__comments').textContent = comments.id;
  }

  galleryElement.querySelector('.picture__likes').textContent = `${gallery.likes}`;
  picturesContainerElement.appendChild(galleryElement);
});

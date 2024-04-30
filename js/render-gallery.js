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
  photoElement.dataset.photoElementId = photo.id;

  return photoElement;
};

const clearGallery = () => {
  document.querySelectorAll('.picture').forEach((picture) => {
    picture.remove();
  });
};

export const renderGallery = (gallery) => {

  const galleryFragment = document.createDocumentFragment();
  clearGallery();
  gallery.forEach((photo) => {
    galleryFragment.append(createPhotoElement(photo));
  });

  picturesContainerElement.append(galleryFragment);
};


import { isEscapeKey } from './utils.js';
import { isValide, resetValidation } from './validation.js';

const changeUpload = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('body');
const closeImg = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('.img-upload__form');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValide()) {
    console.log('Форма валидна!');
    imgUploadClose();
  } else {
    console.log('Форма не валидна!');
  }
});

changeUpload.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadEsc);
});

closeImg.addEventListener('click', () => {
  imgUploadClose();
});

function onImgUploadEsc(evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    imgUploadClose();
  }
}

function imgUploadClose() {
  imgUpload.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadEsc);
  resetValidation();
  uploadForm.reset();
}

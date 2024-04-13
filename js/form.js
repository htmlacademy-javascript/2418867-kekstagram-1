import { isEscapeKey } from './utils.js';
import { isValide, resetValidation } from './validation.js';

const changeUpload = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('body');
const closeImg = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('.img-upload__form');

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadpreview = document.querySelector('.img-upload__preview');

const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('click', (evt) => {
  const effectsPreview = evt.target.closest('.effects__preview');
  imgUploadpreview.classList.add(effectsPreview.classList[1]);
});

scaleControlBigger.onclick = () => {
  const controlPercent = parseFloat(scaleControlValue.value);

  if(controlPercent < 100) {
    scaleControlValue.value = `${controlPercent + 25}%`;
  } else {
    scaleControlValue.value = '100%';
  }

  const changeSize = controlPercent / 100;
  imgUploadpreview.style.transform = `scale(${changeSize})`;
};

scaleControlSmaller.onclick = () => {
  const controlPercent = parseFloat(scaleControlValue.value);

  if(controlPercent > 25) {
    scaleControlValue.value = `${controlPercent - 25}%`;
  } else {
    scaleControlValue.value = '25%';
  }

  const changeSize = controlPercent / 100;
  imgUploadpreview.style.transform = `scale(${changeSize})`;

};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValide()) {
    imgUploadClose();
  } else {
    return ('Форма не валидна!');
  }
});

changeUpload.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadEsc);
  scaleControlValue.value = '100%';
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

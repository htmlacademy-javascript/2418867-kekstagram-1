import { isEscapeKey } from './utils.js';

const changeUpload = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('body');
const closeImg = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm);


const hashtagField = document.querySelector('.text__hashtags');
const reg = /^#[^ !@#$%^&*(),.?":{}|<>]{1,19}$/i;
const space = ' ';
function hashtagValidator(value){
  const hashtags = value.split(space);

  return hashtags.every((elem) => {
    const reItem = reg.test(elem); // переберем массив с проверкой каждого элемента
    console.log(reItem);
    return reItem;
  });
}

pristine.addValidator(hashtagField, hashtagValidator);

uploadForm.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  const isValide = pristine.validate();
  if(isValide){
    console.log('Форма валидна!');
  }else{
    console.log('Форма не валидна!');
  }
});

changeUpload.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadEsc);
  changeUpload.value = '';
});

const imgUploadClose = () => {
  imgUpload.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadEsc);
};

closeImg.addEventListener('click', () => {
  imgUploadClose();
});

function onImgUploadEsc(evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    imgUploadClose();
  }
}

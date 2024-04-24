import { isEscapeKey } from './utils.js';
import { isValide, resetValidation, isTextFieldFocus } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './slider.js';
import { showAlertError } from './showAlertError.js';
import { showAlert } from './showAlert.js';

const changeUpload = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('body');
const closeImg = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadButton = document.querySelector('.img-upload__submit');

const addEscListener = () => {
  document.addEventListener('keydown', onImgUploadEsc);
}

const SubmitButtonCaption = {
  PUBLIC: 'Опубликовать',
  PUBLISHING: 'Публикую...'
}

const blockButton = (isBlocked = false) => {
  if (isBlocked) {
    imgUploadButton.disabled = true;
    imgUploadButton.textContent = SubmitButtonCaption.PUBLISHING;
  } else {
    imgUploadButton.disabled = false;
    imgUploadButton.textContent = SubmitButtonCaption.PUBLIC;
  }
}

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValide()) {
      blockButton(true);
      const formData = new FormData(evt.target);
      fetch(
        'https://28.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            imgUploadClose();
            showAlert();
          } else {
            document.removeEventListener('keydown', onImgUploadEsc);
            showAlertError(addEscListener);
          }
        })
        .catch(() => {
          document.removeEventListener('keydown', onImgUploadEsc);
          showAlertError(addEscListener);
        })
        .finally(() => {
          blockButton();
        });
    }
  });
};

changeUpload.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadEsc);
  resetScale();
  resetEffects();
});

closeImg.addEventListener('click', () => {
  imgUploadClose();
});

function onImgUploadEsc(evt) {
  if (isEscapeKey(evt.key) && !isTextFieldFocus()) {
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

export { setUserFormSubmit, imgUploadClose };

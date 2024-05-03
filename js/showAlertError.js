import { isEscapeKey } from './utils.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
let ecsListenerFn;

const showAlertError = (setEscListener) => {
  if (!document.querySelector('.error')) {
    const errorElement = errorTemplate.cloneNode(true);
    ecsListenerFn = setEscListener;
    errorElement.querySelector('.error__button').addEventListener('click', () => {
      closeAlert();
    });
    errorElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('error')) {
        closeAlert();
      }
    });
    document.body.append(errorElement);
    document.addEventListener('keydown', escKeyHandler);
  }
};

function closeAlert () {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', escKeyHandler);
  ecsListenerFn();
}

function escKeyHandler(e) {
  if (isEscapeKey(e.key)) {
    closeAlert();
  }
}

export { showAlertError };


import { isEscapeKey } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const showAlert = () => {
  const successElement = successTemplate.cloneNode(true);
  successElement.querySelector('.success__button').addEventListener('click', closeAlert);
  successElement.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('success')){
      closeAlert();
    }
  });
  document.body.append(successElement);
  document.addEventListener('keydown', escKeyHandler);
};

function closeAlert () {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', escKeyHandler);
}

function escKeyHandler(e){
  if (isEscapeKey(e.key)) {
    closeAlert();
  }
}

export {showAlert};


const showAlertText = () => {
  const errorTemplate = document.querySelector('#success')
    .content
    .querySelector('.success__title');

  const errorElement = errorTemplate.cloneNode(true);
  errorElement.style.textAlign = 'center';
  document.body.append(errorElement);
};

const showAlertButton = () => {
  const errorTemplate = document.querySelector('#success')
    .content
    .querySelector('.success__button');

  const errorElement = errorTemplate.cloneNode(true);
  errorElement.style.position = 'absolute';
  errorElement.style.left = '0';
  errorElement.style.buttom = '0';
  errorElement.style.right = '0';
  document.body.append(errorElement);
};

const closeAlert = () => {
  const buttonAlert = document.querySelector('.success__button');
  const textAlert = document.querySelector('.success__title');
  buttonAlert.addEventListener('click', () => {
    buttonAlert.classList.add('hidden');
    textAlert.classList.add('hidden');
  });
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const buttonAlert = document.querySelector('.success__button');
    const textAlert = document.querySelector('.success__title');
    buttonAlert.classList.add('hidden');
    textAlert.classList.add('hidden');
  }
});

const showAlert = () => {
  showAlertText();
  showAlertButton();
  closeAlert();
};

export {showAlert};


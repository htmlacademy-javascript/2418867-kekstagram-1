const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const specialElementMarvin = document.querySelector('.effects__preview--marvin');

valueElement.value = 80;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

specialElementMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    // Цена и шаг в десять раз меньше
  } else {
    // Цена и шаг по умолчанию
  }
});

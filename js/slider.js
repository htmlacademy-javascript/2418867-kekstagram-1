import { Effects, INITIAL_SLIDER, ImageEffects, IMAGE_EFFECT_INITIAL } from './constant.js';

const sliderContainerElement = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgUploadpreview = document.querySelector('.img-upload__preview img');

noUiSlider.create(sliderElement, INITIAL_SLIDER);

const clearEffectClasses = () => {
  Object.keys(Effects).forEach((item) => {
    imgUploadpreview.classList.remove(`effects__preview--${item.toLowerCase()}`);
  });
  imgUploadpreview.classList.remove(`effects__preview--${IMAGE_EFFECT_INITIAL.toLowerCase()}`);
};

const renderImageEffect = () => {
  clearEffectClasses();
  const currentEffect = document.querySelector('.effects__radio:checked').value;
  imgUploadpreview.classList.add(`effects__preview--${currentEffect}`);
  imgUploadpreview.style.filter = ImageEffects[currentEffect.toUpperCase()](valueElement.value);
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderImageEffect();
});

const updateSlider = (filter) => {
  sliderElement.noUiSlider.updateOptions(Effects[filter.toUpperCase()]);
};

const resetEffects = () => {
  sliderContainerElement.classList.add('hidden');
  document.querySelector('#effect-none').checked = true;
  imgUploadpreview.style.filter = ImageEffects[IMAGE_EFFECT_INITIAL]();
};

effectsList.addEventListener('change', (evt) => {
  if (evt.target.value === 'none') {
    resetEffects();
  } else {
    sliderContainerElement.classList.remove('hidden');
    updateSlider(evt.target.value);
    renderImageEffect();
  }
});

export {resetEffects};

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadpreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

let localScale = MAX_SCALE;

const renderImage = () => {
  imgUploadpreview.style.transform = `scale(${localScale / 100})`;
};

const renderInput = () => {
  scaleControlValue.value = `${localScale}%`;
};

const renderAll = () => {
  renderImage();
  renderInput();
};

scaleControlBigger.onclick = () => {
  localScale = localScale + STEP_SCALE <= MAX_SCALE ? localScale + STEP_SCALE : localScale;
  renderAll();
};

scaleControlSmaller.onclick = () => {
  localScale = localScale - STEP_SCALE >= MIN_SCALE ? localScale - STEP_SCALE : localScale;
  renderAll();
};

const resetScale = () => {
  localScale = MAX_SCALE;
  renderAll();
};

export {resetScale};

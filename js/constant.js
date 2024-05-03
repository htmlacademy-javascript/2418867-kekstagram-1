export const Effects = {
  CHROME: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1
  },
  HEAT: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1
  }
};

export const INITIAL_SLIDER = {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
};

export const ImageEffects = {
  CHROME: (value) => `grayscale(${value})`,
  SEPIA: (value) => `sepia(${value})`,
  MARVIN: (value) => `invert(${value}%)`,
  PHOBOS: (value) => `blur(${value}px)`,
  HEAT: (value) => `brightness(${value})`,
  NONE: () => '',
};

export const IMAGE_EFFECT_INITIAL = 'NONE';

export const ALERT_SHOW_TIME = 5000;

export const ALERT_ERROR_TEXT = 'Упссс';

export const COUNT_TIME_OUT = 500;

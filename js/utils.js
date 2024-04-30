import { ALERT_SHOW_TIME } from './constant.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const isEscapeKey = (key) => key === 'Escape';

export {getRandomInteger, isEscapeKey};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const showErrorMessage = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  alert.classList.add('data-error');
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

// //Кекстаграм
// const LINE_LENGHT = 10;

// const checkLenght = (str) => str.length > LINE_LENGHT;

// checkLenght('Длинна строки');

// //Palindrom
// const isPalindrome = (string) => {

//   const tempString = string
//     .toLowerCase()
//     .replaceAll(' ', '');

//   for (let i = 0, j = tempString.length - 1; i < j; i++, j--) {
//     if (string[i] !== string[j]) {
//       return false;
//     }
//   }

//   return true;
// };

// isPalindrome('madam');

// //line length
// const checkStringLength = (string, maxLength) => string.length <= maxLength;

// checkStringLength ('Строка' , 6);

// //extract a number

// const extractNumber = (string) => {
//   let result = '';

//   for (let i = 0; i < string.length; i++) {
//     if (!Number.isNaN(parseInt(string.at(i), 10))) {
//       result += string.at(i);
//     }
//   }

//   return parseInt(result, 10);
// };

// extractNumber ('1 кефир, 0.5 батона');

// //pad start

// const padStart = (originalLine, minLength, pad) => {
//   const actualPad = minLength - originalLine.length;

//   if (actualPad <= 0) {
//     return originalLine;
//   }

//   const padSlice = pad.slice(0, actualPad % pad.length);
//   const padRepeat = pad.repeat(actualPad / pad.length);

//   return padSlice + padRepeat + originalLine;
// };

// padStart('1', 4, '0');

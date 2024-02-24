checkLenght('Длинна строки');
isPalindrome('Madam In Eden Im Adam');
checkString ('Строка' , 6);
extractNumber ('1 кефир, 0.5 батона');
padStart('1', 4, '0');

//Кекстаграм
function checkLenght (str) {
  if(str.length > 10) {
    return(true);
  } else {
    return(false);
  }
}

//Palindrom
function isPalindrome (string) {

  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
}

//line length
function checkString (string, length) {
  return string.length <= length;
}

//extract a number

function extractNumber (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
}

//pad start

function padStart (string, minLength, pad) {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  const padSlice = pad.slice(0, actualPad % pad.length);
  const padRepeat = pad.repeat(actualPad / pad.length);

  return padSlice + padRepeat + string;
}

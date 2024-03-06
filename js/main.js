const creatingAnArray = (minNumber,maxNumber) => {
  const massiveInteger = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    massiveInteger.push(i);
  }

  maxNumber = massiveInteger;
  return maxNumber;
};

const DESCRIPTIONS = [
  'logo',
  'notification',
  'ice_cream',
  'butterfly',
  'snowflake',
  'car'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Александр',
  'Вася',
  'Божественный комментатор',
  'frft',
  'Leha',
  'Екатерина'
];

const createPhoto = () => {
};

const massive = (number) => {
  Array.from(Array(number));
  return Array.from(Array(number));
};

const createAvatar = () => {

  const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

  const randomIdIndex = getRandomInteger(0, massive(24).length - 1);
  const randomAvatarIndex = getRandomInteger(0, massive(6).length - 1);
  const descriptionNumber = randomAvatarIndex;
  const randomLikesIndex = getRandomInteger(0, massive(200).length - 1);
  const randomComentsIndex = getRandomInteger(0, COMMENTS.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const id = creatingAnArray(1,24)[randomIdIndex];
  const avatar = `img/${ creatingAnArray(1,6)[randomAvatarIndex] }.svg ${ DESCRIPTIONS[descriptionNumber]}`;
  const likes = creatingAnArray(15,200)[randomLikesIndex];
  const comments = COMMENTS[randomComentsIndex];
  const name = NAMES[randomNameIndex];

  return {
    id, avatar, likes, comments, name,
  };
};


const Zmassive = Array.from(massive(25),createAvatar);
console.log(Zmassive);



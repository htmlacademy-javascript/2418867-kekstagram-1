// function shuffle(array) {
//   let i = array.length,
//     j = 0,
//     temp;

//   while (i--) {

//     j = Math.floor(Math.random() * (i + 1));

//     temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;

//   }

//   return array;
// }

const creatingAnArray = (minNumber,maxNumber) => {
  const massiveInteger = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    massiveInteger.push(i);
  }

  maxNumber = massiveInteger;
  return maxNumber;
};

const DESCRIPTION = [
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

const NAME = [
  'Александр',
  'Вася',
  'Божественный комментатор',
  'frft',
  'Leha',
  'Екатерина'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createWizard = () => {

  const randomIdIndex = getRandomInteger(0, creatingAnArray(1,24).length - 1);

  const randomAvatarIndex = getRandomInteger(0, creatingAnArray(1,6).length - 1);

  const descriptionNumber = randomAvatarIndex;

  const randomLikesIndex = getRandomInteger(0, creatingAnArray(15,200).length - 1);

  const randomComentsIndex = getRandomInteger(0, COMMENTS.length - 1);

  const randomNameIndex = getRandomInteger(0, NAME.length - 1);

  return {
    id: creatingAnArray(1,24)[randomIdIndex],
    avatar: `img/${ creatingAnArray(1,6)[randomAvatarIndex] }.svg ${ DESCRIPTION[descriptionNumber]}`,
    likes: creatingAnArray(15,200)[randomLikesIndex],
    comments: COMMENTS[randomComentsIndex],
    name: NAME[randomNameIndex]
  };
};

createWizard();

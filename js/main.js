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

const creatingArray = (number) => {
  let massiveInteger = [];
  massiveInteger = Array.apply(null, Array(number))
    .map((y, i) => i);
  return massiveInteger;
};


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createPhoto = () => {

  const randomPhotoIndex = getRandomInteger(1, creatingArray(25).length - 1);
  const descriptionNumber = randomPhotoIndex;

  const createAvatar = () => {
    const randomAvatarIndex = getRandomInteger(1, creatingArray(6).length - 1);

    return {
      id: creatingArray(25)[getRandomInteger(1, creatingArray(25).length - 1)],
      avatar: `img/${ creatingArray(6)[randomAvatarIndex] }.svg`,
      likes: creatingArray(200)[ getRandomInteger(15, creatingArray(200).length - 1)],
      comments: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)]
    };
  };

  return {
    id: creatingArray(25)[getRandomInteger(1, creatingArray(25).length - 1)],
    avatar: `photos/${ creatingArray(25)[randomPhotoIndex] }.jpg ${ DESCRIPTIONS[descriptionNumber]}`,
    likes: creatingArray(200)[ getRandomInteger(15, creatingArray(200).length - 1)],
    comments: createAvatar(2)[getRandomInteger(0, COMMENTS.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};


const Amassive = Array.from(creatingArray(2),createPhoto);



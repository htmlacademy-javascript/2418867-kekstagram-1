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


const creatingArray = (number) => {
  let massiveInteger = [];
  massiveInteger = Array.apply(null, Array(number))
    .map((y, i) => i);
  return massiveInteger;
};

const createAvatar = () => {

  const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

  const randomAvatarIndex = getRandomInteger(1, creatingArray(6).length - 1);
  const descriptionNumber = randomAvatarIndex;

  return {
    id: creatingArray(25)[getRandomInteger(1, creatingArray(25).length - 1)],
    avatar: `img/${ creatingArray(6)[randomAvatarIndex] }.svg ${ DESCRIPTIONS[descriptionNumber]}`,
    likes: creatingArray(200)[ getRandomInteger(15, creatingArray(200).length - 1)],
    comments: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};


const Zmassive = Array.from(creatingArray(25),createAvatar);
console.log(Zmassive);



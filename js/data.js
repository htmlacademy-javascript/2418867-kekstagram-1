import {getRandomInteger} from './util.js';

const DESCRIPTIONS = [
  'logo',
  'notification',
  'ice_cream',
  'butterfly',
  'snowflake',
  'car',
  'photo',
  'everest',
  'moscow',
  'san_rrancisco',
  'rebus',
  'sun',
  'rain',
  'money',
  'live',
  'room',
  'space',
  'jump',
  'people',
  'red bus',
  'knife danger',
  'mad milk',
  'bad bull',
  'nice day in russia',
  'my name god'
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
const START_NUMBER = 1;
const AVATAR_NUMBER = 6;
const PHOTO_MAX_NUMBER = 25;
const COMMENT_MAX_NUMBER = 25;
const LIKE_MIN_NUMBER = 15;
const LIKE_MAX_NUMBER = 200;


const createComment = (id) => ({
  id,
  avatar: `img/${getRandomInteger(START_NUMBER, AVATAR_NUMBER)}.svg`,
  messsage: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createPhoto = (id) => ({
  id,
  url: `photos/${getRandomInteger(START_NUMBER, PHOTO_MAX_NUMBER) }.jpg ${ DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]}`,
  likes: getRandomInteger(LIKE_MIN_NUMBER, LIKE_MAX_NUMBER),
  comments: Array.from({length: getRandomInteger(START_NUMBER, COMMENT_MAX_NUMBER)}, (_v, i) => createComment(i))
});


const createGallery = (photosLength) => Array.from({length: photosLength}, (_v, i) => createPhoto(i + 1));

export {createGallery};

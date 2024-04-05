import {getRandomInteger} from './utils.js';

const DESCRIPTIONS = [
  'Больше жизни, меньше беспокойства',
  'notification',
  'Плюс одна страна в копилку',
  'Было сложно, но зато как вышло!',
  'snowflake',
  'Мне нужен шестимесячный отпуск два раза в год',
  'Уровень доверия: селфи без фильтра',
  'Я, снова я и опять я',
  'На тот случай, если вы забыли, как я выгляжу',
  'Маскируюсь под местных. Как думаете, получилось?',
  'Miss me?',
  'Икона стиля районного масштаба',
  'rain',
  'Требую шестимесячные каникулы. Два раза в год!',
  'Я никогда не упускаю шанс потанцевать',
  'Мы легли на дно, мы зажгли огни, во Вселенной только мы одни',
  'Сегодня один из таких дней, когда даже моему кофе нужен кофе',
  'Нормальные люди по утрам просыпаются, а я восстаю',
  'people',
  'Некоторые дни начинаются лучше остальных',
  'На 90 % состою из «важных» дел',
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
const PHOTO_COUNT = 25;
const START_NUMBER = 1;
const AVATAR_NUMBER = 6;
const PHOTO_MAX_NUMBER = 25;
const COMMENT_MAX_NUMBER = 25;
const LIKE_MIN_NUMBER = 15;
const LIKE_MAX_NUMBER = 200;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(START_NUMBER, AVATAR_NUMBER)}.svg`,
  messsage: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createPhoto = (id) => ({
  id,
  url: `photos/${getRandomInteger(START_NUMBER, PHOTO_MAX_NUMBER) }.jpg`,
  description: `${ DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)]}`,
  likes: getRandomInteger(LIKE_MIN_NUMBER, LIKE_MAX_NUMBER),
  comments: Array.from({length: getRandomInteger(START_NUMBER, COMMENT_MAX_NUMBER)}, (_v, i) => createComment(i))
});

export const createGallery = () => Array.from({length: PHOTO_COUNT}, (_v, i) => createPhoto(i + 1));

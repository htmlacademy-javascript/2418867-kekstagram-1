import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const loader = bigPicture.querySelector('.social__comments-loader');

const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

const STEP_COMMENT = 5;
const localComments = [];
let renderedCommentsCount = 0;
let total = 0;

const renderStatistic = () => {
  commentsCount.innerHTML = `${renderedCommentsCount} из <span class="comments-count">${total}</span> комментариев`;
};

const renderLoader = () => {
  if (renderedCommentsCount < total) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
};

const createАuthor = (element) => {
  bigPicture.querySelector('.social__caption').textContent = element.description;
  bigPicture.querySelector('.likes-count').textContent = element.likes;
  bigPicture.querySelector('.comments-count').textContent = element.comments.length;
  bigPicture.querySelector('.big-picture__img img').src = element.url;

  for (const result of element.comments) {
    bigPicture.querySelector('.social__picture').src = result.avatar;
  }
};

const createCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__text').textContent = comment.message;
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  renderedCommentsCount++;
  return commentElement;
};

const createComments = () => {
  const fragmentComment = document.createDocumentFragment();
  localComments.splice(0, STEP_COMMENT).forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragmentComment.append(commentElement);
  });

  socialComments.append(fragmentComment);
  renderStatistic();
  renderLoader();
};

loader.addEventListener('click', () => {
  createComments();
});

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEsc);
};

closeBigPicture.addEventListener('click', () => {
  bigPictureClose();
});

function onBigPictureEsc(evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    bigPictureClose();
  }
}

export const fullPicture = (element) => {
  bigPicture.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEsc);

  socialComments.innerHTML = '';
  renderedCommentsCount = 0;
  localComments.length = 0;

  localComments.push(...element.comments.slice());
  total = localComments.length;

  createАuthor(element);
  createComments();
};


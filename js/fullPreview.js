import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');

const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

const createАuthor = (element) => {
  bigPicture.querySelector('.social__caption').textContent = element.description;
  bigPicture.querySelector('.likes-count').textContent = element.likes;
  bigPicture.querySelector('.comments-count').textContent = element.comments.length;
  bigPicture.querySelector('.big-picture__img img').src = element.url;

  for(const result of element.comments){
    bigPicture.querySelector('.social__picture').src = result.avatar;
  }
};

const createCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__text').textContent = comment.messsage;
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;

  return commentElement;
};

const createComments = (comments) => {
  socialComments.innerHTML = '';

  const fragmentComment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragmentComment.append(commentElement);
  });

  socialComments.append(fragmentComment);
};

const bigPictureClose = () => {
  bigPicture.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEsc);
};

closeBigPicture.addEventListener('click', () => {
  bigPictureClose();
});

function onBigPictureEsc (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    bigPictureClose();
  }
}

export const fullPicture = (element) => {
  bigPicture.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
  document.addEventListener('keydown', onBigPictureEsc);

  createАuthor(element);
  createComments(element.comments);
};


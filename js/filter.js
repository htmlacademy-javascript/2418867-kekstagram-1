const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) => pictureA.comments.length - pictureB.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0,PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filteres__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filterElement
      .querySelector('.img-filteres__button--active')
      .classList.remove('.img-filteres__button--active');
    clickedButton.classList.add('img-filteres__button--active');
    currentFilter = clickedButton.id;
    callback(getFilteredPictures());
  });
};


const init = (loadedPictures, callback) => {
  filterElement.classList.remove('img-filteres--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(callback);
};

export {init, getFilteredPictures};

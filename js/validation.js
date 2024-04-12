const uploadForm = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const MAX_TAGS_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const reg = /^#[a-zР°-СЏС‘0-9]{1,19}$/i;
const space = ' ';

const createHashTags = (value) => value.replace(/\s+/g,' ').trim().toLowerCase().split(space);

const hashtagValidator = (value) => !value.length || createHashTags(value).every((elem) => reg.test(elem));

const hashtagNumberValidator = (value) => createHashTags(value).length <= MAX_TAGS_COUNT;

const hashtagUnique = (value) => {
  const hashtags = createHashTags(value);
  const uniqueHashtags = [...new Set(hashtags)];
  return hashtags.length === uniqueHashtags.length;
};

const descriptionValidator = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  hashtagField,
  hashtagValidator,
  'Неверный формат хештега'
);

pristine.addValidator(
  hashtagField,
  hashtagNumberValidator,
  `Количество хештегов не должно превышать ${MAX_TAGS_COUNT}`
);

pristine.addValidator(
  hashtagField,
  hashtagUnique,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  description,
  descriptionValidator,
  `Описание не должно быть дленнее ${MAX_DESCRIPTION_LENGTH} символов`
);

const resetValidation = () => pristine.reset();

const isValide = () => pristine.validate();

export { isValide, resetValidation };

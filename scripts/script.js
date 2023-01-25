
//consts
//закрывающий элемент в popup
const popupCloseButton = document.querySelector('.popup__toggle-edit-button ');
//элемент редактирования профиля(карандашик)
const profileButtonOpenClose = document.querySelector('.profile__editor');
//элемент формы в popup
const formProfile = document.querySelector('.popup__admin-new-place');
// элемент в popup имя
const nameInput = document.querySelector('.popup__item_value_name');
// элемент в popup хобби
const jobInput = document.querySelector('.popup__item_value_hobby');
// 'элемент большая кнопка в профиле на добавление карточек с картинками
const buttonAddImageProfile = document.querySelector('.profile__button');
// элемент в popup добавление картинок на закрытие (крестик)
const buttonClosePopupImage = document.querySelector('.popup__toggle-close');
// элемент кнопка создать в popup добавление картинок
const buttonSubmit = document.querySelector('.popup__button-create');
// элемент Ul (список карточек, основное хранилище)
const elementsList = document.querySelector('.elements__list');
// элемент тимплейта
const cardTemplate = document.querySelector('.card-template').content;
// кнопка закрытия у попапа с большой картинкой
const buttonCloseBigImage = document.querySelector('.popup__toggle-big-image');
// кнопка закрытия у попапа с добавлением картинок
const popupAddImageClose = document.querySelector('.popup__toggle-add-image');
// кнопка сохранения редактирования профиля
const buttonSaveFormProfile = document.querySelector('.popup__button');

//функция создающая карточки
function createCard(cardName, linkImage) {
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);

    cardElem.querySelector('.elements__image').src = linkImage;
    cardElem.querySelector('.elements__title').textContent = cardName;
    cardElem.querySelector('.elements__image').alt = cardName;
//удаление карточки
    cardElem.querySelector('.elements__delite-button').addEventListener('click', function (evt) {
        evt.target.closest('.elements__card').remove()
    });
    //лайк карточки
    cardElem.querySelector('.elements__button').addEventListener('click', function (evt) {

        evt.target.classList.remove('.elements__button');
        evt.target.classList.toggle('elements__button_active');
    });
// попап с большой картинкой
    cardElem.querySelector('.elements__image').addEventListener('click', function () {
        document.querySelector('.popup__image').src = linkImage;
        document.querySelector('.popup__image-comment').textContent = cardName;
        document.querySelector('.popup__image').alt = cardName;

        document.querySelector('.popup_opened-big-image').classList.add('popup_opened');
    })
    return cardElem
}
//функция добавляющая карточки в разметку
function renderCard(card, container) {
    container.prepend(card)
}

//добавление картинок "из коробки"
initialCards.forEach(function (element) {
    const cardAdd = createCard(element.name, element.link);
    elementsList.prepend(cardAdd);
});
//функция добавляющая картинки на страницу через popup img
function submitCardForm(evt) {
    evt.preventDefault();

    let linkInput = document.querySelector('.popup__item_value_link');
    let placeInput = document.querySelector('.popup__item_value_new-place');
    let newCard = createCard(placeInput.value, linkInput.value);

    document.querySelector('.popup_opened-image').classList.remove('popup_opened');
    linkInput.value = '';
    placeInput.value = '';
    renderCard(newCard, elementsList);
}
buttonSubmit.addEventListener('click', submitCardForm);


// //функция закрывающая окошко popup
function closePopup() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);


//закрытие большой картинки
buttonCloseBigImage.addEventListener('click', function () {
     document.querySelector('.popup_opened-big-image').classList.remove('popup_opened');
})


//функция открывающая окошко popup
function openPopup() {
    document.querySelector('.popup').classList.add('popup_opened');
}
profileButtonOpenClose.addEventListener('click', openPopup)


buttonSaveFormProfile.addEventListener('click', (evt => {
    evt.preventDefault();


    let qwe =  document.querySelector('.profile__name');
    let qaz =  document.querySelector('.profile__status');
    qwe.textContent = nameInput.value;
    qaz.textContent  =  jobInput.value;
    document.querySelector('.popup_opened').classList.remove('popup_opened');
}));


//функция открывающая окошко добавление картинки
function openedPopupImage() {
    document.querySelector('.popup_opened-image').classList.add('popup_opened');
}
buttonAddImageProfile.addEventListener('click', openedPopupImage);


//функция закрывающая попап с добавлением картинок
function closePopupImage() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.querySelector('.popup__item_value_link').value = '';
    document.querySelector('.popup__item_value_new-place').value = '';
}
popupAddImageClose.addEventListener('click', closePopupImage);



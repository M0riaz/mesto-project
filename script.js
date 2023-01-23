const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//consts
//закрывающий элемент в popup
const popupCloseButton = document.querySelector('.popup__toggle');
//элемент редактирования профиля(карандашик)
const profileButtonOpenClose = document.querySelector('.profile__editor');
//элемент формы в popup
const formElement = document.querySelector('.popup__admin');
// элемент в popup имя
const nameInput = document.querySelector('.popup__item_value_name');
// элемент в popup хобби
const jobInput = document.querySelector('.popup__item_value_hobby');
// 'элемент большая кнопка в профиле на добавление карточек с картинками
const buttonAddImageProfile = document.querySelector('.profile__button');
// элемент в popup добавление картинок на закрытие (крестик)
const buttonClosePopupImage = document.querySelector('.popup__toggle-close');
// элемент кнопка создать в popup добавление картинок
const submitButton = document.querySelector('.popup__button-create');
// элемент Ul (список карточек, основное хранилище)
const elementsList = document.querySelector('.elements__list');
// элемент тимплейта
const cardTemplate = document.querySelector('.card-template').content;

const closeBigImageButton = document.querySelector('.popup__toggle-big-image');

const closePopupAddImage = document.querySelector('.popup__toggle-add-image');

const elementPopup = document.querySelector('.popup');


//функция добавляющая карточки в разметку (из коробки)
initialCards.forEach(function (element) {
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);

    cardElem.querySelector('.elements__image').src = element.link;
    cardElem.querySelector('.elements__title').textContent = element.name;
    cardElem.querySelector('.elements__image').alt = element.name;

    cardElem.querySelector('.elements__delite-button').addEventListener('click', function (evt) {
        evt.target.closest('.elements__card').remove()
    })
    cardElem.querySelector('.elements__button').addEventListener('click', function (evt) {

        evt.target.classList.remove('.elements__button');
        evt.target.classList.toggle('elements__button_active');
    });

    cardElem.querySelector('.elements__image').addEventListener('click', function () {
        document.querySelector('.popup__image').src = element.link;
        document.querySelector('.popup__image-comment').textContent = element.name;
        document.querySelector('.popup__image').alt = element.name;
        // document.querySelector('.popup_opened-big-image').style.display = 'flex';

        document.querySelector('.popup_opened-big-image').classList.add('popup_opened');
    })

    elementsList.prepend(cardElem)
});

// //функция закрывающая окошко popup
function popupClose() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', popupClose);


//закрытие большой картинки
closeBigImageButton.addEventListener('click', function () {
     document.querySelector('.popup_opened-big-image').classList.remove('popup_opened');
})


//функция открывающая окошко popup
function popupOpen() {
    document.querySelector('.popup').classList.add('popup_opened');

}
profileButtonOpenClose.addEventListener('click', popupOpen)


//редактирования профиля сохранение имени и хобби
function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__status').textContent = jobInput.value;
    document.querySelector('.popup_opened').classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler);


//функция открывающая окошко добавление картинки
function popupOpenedImage() {
    document.querySelector('.popup_opened-image').classList.add('popup_opened');
}
buttonAddImageProfile.addEventListener('click', popupOpenedImage);


//функция закрывающая попап с добавлением картинок
function closePopupImage() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.querySelector('.popup__item_value_link').value = '';
    document.querySelector('.popup__item_value_new-place').value = '';
}

closePopupAddImage.addEventListener('click', closePopupImage);


//функция добавляющая картинки на страницу через popup img
function formSubmit(evt) {

    let cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);
    function addImage(imageValue, titleValue) {


        cardElem.querySelector('.elements__image').src = imageValue;
        cardElem.querySelector('.elements__title').textContent = titleValue;
        cardElem.querySelector('.elements__image').alt = titleValue;

        elementsList.prepend(cardElem);
    }

    evt.preventDefault();
    let linkInput = document.querySelector('.popup__item_value_link');
    let placeInput = document.querySelector('.popup__item_value_new-place');

    addImage(linkInput.value, placeInput.value)
    initialCards.push({name: placeInput.value, link: linkInput.value});


    document.querySelector('.elements__button').addEventListener('click', function (evt) {

        evt.target.classList.remove('.elements__button');
        evt.target.classList.toggle('elements__button_active');
    });

    document.querySelector('.elements__delite-button').addEventListener('click', function (evt) {
        evt.target.closest('.elements__card').remove()
    })

    cardElem.querySelector('.elements__image').addEventListener('click', function () {
        document.querySelector('.popup__image').src = cardElem.querySelector('.elements__image').src;
        document.querySelector('.popup__image-comment').textContent = cardElem.querySelector('.elements__title').textContent;
        document.querySelector('.popup__image').alt = cardElem.querySelector('.elements__title').textContent;
        document.querySelector('.popup_opened-big-image').classList.add('popup_opened');
    })

    document.querySelector('.popup_opened-image').classList.remove('popup_opened');
    linkInput.value = '';
    placeInput.value = '';


}

submitButton.addEventListener('click', formSubmit);



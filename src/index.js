import {initialCards} from "./scripts/cards.js";
import {
    showError, hideError, toggleButtonStatus, checkAllForms, checkInputValidity, hasInvalidInput, setEventListener
} from "./scripts/valid.js";

import {
    popupCloseButton,
    profileButtonOpenClose,
    formNewPlace,
    formProfile,
    nameInput,
    jobInput,
    buttonAddImageProfile,
    elementsList,
    cardTemplate,
    buttonCloseBigImage,
    popupAddImageClose,
    profileName,
    profileStatus,
    popupProfileOpenClose,
    bigImagePopup,
    imagePopupOpen,
    popupMain
} from "./scripts/consts.js";

import {createCard} from "./scripts/createNewCard.js"

 import './pages/index.css';

//функция открытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_opened');
}

//функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//функция добавляющая карточки в разметку
function renderCard(card, container) {
    container.prepend(card);
}

//добавление картинок "из коробки"
initialCards.forEach(function (element) {
    const cardAdd = createCard(element.name, element.link);
    elementsList.prepend(cardAdd);
});

//функция добавляющая картинки на страницу через popup img
function submitCardForm(evt) {
    evt.preventDefault();

    const linkInput = document.querySelector('.popup__item_value_link');
    const placeInput = document.querySelector('.popup__item_value_new-place');
    const newCard = createCard(placeInput.value, linkInput.value);

    closePopup(imagePopupOpen)
    linkInput.value = '';
    placeInput.value = '';

    renderCard(newCard, elementsList);

}
formNewPlace.addEventListener('submit', submitCardForm);

//функция закрывающая окошко popup редактирования профиля
function closePopupProfile() {
    closePopup(popupProfileOpenClose)
}
popupCloseButton.addEventListener('click', closePopupProfile);

//закрытие большой картинки
buttonCloseBigImage.addEventListener('click', function () {
    closePopup(bigImagePopup)
})

//функция открывающая окошко popup
function openPopupEditProfile() {
    openPopup(popupProfileOpenClose);
}
profileButtonOpenClose.addEventListener('click', openPopupEditProfile);

//редактирование имени профиля и хобби с сохранением
formProfile.addEventListener('submit', (evt => {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup(popupProfileOpenClose);
}));

//функция открывающая окошко добавление картинки
function openedPopupImage() {
    openPopup(imagePopupOpen);
}
buttonAddImageProfile.addEventListener('click', openedPopupImage);

//функция закрывающая попап с добавлением картинок
function closePopupImage() {
    closePopup(imagePopupOpen)
    document.querySelector('.popup__item_value_link').value = '';
    document.querySelector('.popup__item_value_new-place').value = '';
}
popupAddImageClose.addEventListener('click', closePopupImage);

// функция закрывающая попап по нажатию на оверлей
document.addEventListener('click', function (evt) {

    if (evt.target.classList.contains('popup')) {
        evt.target.classList.remove('popup_opened');
    }
});

// функция закрывающая попап на esc
document.addEventListener('keydown', evt => {
    popupMain.forEach(popup => {
        if (evt.key === 'Escape') {
            popup.classList.remove('popup_opened');
        }
    })
});
console.log('hey')
import {initialCards} from "./components/cards.js";
import {
    showError,
    hideError,
    toggleButtonStatus,
    enableValidation,
    checkInputValidity,
    hasInvalidInput,
    setEventListener
} from "./components/validate.js";

import {
    profileCloseButtonCross,
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
    popups,
    linkInput,
    placeInput,
    closeButtons, buttonOpenPopupCreateImage,
} from "./components/consts.js";

import {createCard} from "./components/createNewCard.js"

 import './pages/index.css';

import {closePopup, openPopup, closeByEscape, closeAnyPopup} from "./components/utils";

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
    const newCard = createCard(placeInput.value, linkInput.value);
    closePopup(imagePopupOpen)
    //linkInput.value = '';
  //  placeInput.value = '';
   evt.target.reset()
    renderCard(newCard, elementsList);

}
formNewPlace.addEventListener('submit', submitCardForm);


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
   // buttonOpenPopupCreateImage.classList.add('popup__button_disabled')
    openPopup(imagePopupOpen);
}
buttonAddImageProfile.addEventListener('click', openedPopupImage);




enableValidation({
    formSelector: '.popup__admin',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_error',
    errorClass: 'popup__input-error_active'
});


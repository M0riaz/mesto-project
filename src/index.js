import {initialCards} from "./scripts/cards.js";
import {
    showError,
    hideError,
    toggleButtonStatus,
    enableValidation,
    checkInputValidity,
    hasInvalidInput,
    setEventListener
} from "./scripts/validate.js";

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
    buttonsCross, buttonOpenPopupCreateImage,
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

//функция закрывающая любой попап на клик по оверлею или по кнопке крестика
function closeAnyPopup(){
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('popup__toggle')) {
                closePopup(popup)
            }
        })
    })
}
closeAnyPopup()
//функция закрывающая попап на esc
function closeByEscape(evt){
    if (evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup)
    }
}
document.addEventListener('keydown', closeByEscape);

enableValidation({
    formSelector: '.popup__admin',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_error',
    errorClass: 'popup__input-error_active'
});


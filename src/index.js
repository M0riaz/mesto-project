
import {
    addNewCardsOnServer,
    getCardsFromServer, myId,
    patchingProfile,
    showLikes,
    showUser,
    updateAvatar
} from "./components/api"

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
    closeButtons,
    buttonOpenPopupCreateImage,
    likeCountShow,
    buttonDeliteOnCard,
    avatarChangePopup,
    buttonOnpenAvatar,
    profileAvatar, formNewAvatar, inputAvatar, popupButtons
} from "./components/consts.js";

import {createCard} from "./components/createNewCard.js"

 import './pages/index.css';

import {closePopup, openPopup, closeByEscape, closeAnyPopup} from "./components/utils";

//функция добавляющая карточки в разметку
function renderCard(card, container) {
    container.prepend(card);
}

// вызов функции отображающий карточки с сервера
getCardsFromServer()
    .then((cards) => {
        cards.forEach(function (cards) {
            const cardAdd = createCard(cards.name, cards.link, cards.likes.length, cards.owner._id === myId, cards._id);
            elementsList.append(cardAdd);
        })
    })

//вызов функции отображающий информация о пользователе

showUser()
.then(res => {
    profileName.textContent = res.name
    profileStatus.textContent = res.about
    profileAvatar.src = res.avatar
})

//функция добавляющая картинки на страницу через popup img
function submitCardForm(evt) {
    loading(true)
    evt.preventDefault();
    const newCard = createCard(placeInput.value, linkInput.value);
    addNewCardsOnServer(placeInput.value, linkInput.value)
    .finally(()=>{
       loading(false)
    })
    closePopup(imagePopupOpen)
   evt.target.reset()
    renderCard(newCard, elementsList);

}
formNewPlace.addEventListener('submit', submitCardForm);

//функция открывающая окошко popup профиля
function openPopupEditProfile() {
    openPopup(popupProfileOpenClose);
}
profileButtonOpenClose.addEventListener('click', openPopupEditProfile);


//редактирование имени профиля и хобби с сохранением
function saveRedactionProfile (evt){
    loading(true)
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;


    patchingProfile(nameInput.value,jobInput.value)
        .finally(()=>{
        loading(false)
    })
    closePopup(popupProfileOpenClose);
}
formProfile.addEventListener('submit', saveRedactionProfile)

//функция открывающая окошко добавление картинки
function openedPopupImage() {
    openPopup(imagePopupOpen);
}
buttonAddImageProfile.addEventListener('click', openedPopupImage);

//функция открывающая окошко добавление картинки для изменения аватара
function openedPopupChangeAvatar (){
    openPopup(avatarChangePopup)
}
buttonOnpenAvatar.addEventListener('click', openedPopupChangeAvatar )


//функция обновляющая аватар пользователя
function submitNewAvatar (evt) {
    loading(true)
    evt.preventDefault();
    updateAvatar(inputAvatar.value)
        .finally(()=>{
            loading(false)
        })
    profileAvatar.src = inputAvatar.value;
    closePopup(avatarChangePopup);
console.log(inputAvatar.value)
    evt.target.reset()

}
formNewAvatar.addEventListener('submit', submitNewAvatar)

// вызов функции валидации
enableValidation({
    formSelector: '.popup__admin',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_error',
    errorClass: 'popup__input-error_active'
});

//  функция отображения загрузки
function loading (isLoading){

    popupButtons.forEach((btn) => {
        if (isLoading){
            btn.textContent = 'Сохранение...'
        } else if (btn === buttonOpenPopupCreateImage){
            btn.textContent = 'Создать'
        }
        else {
            btn.textContent = 'Сохранить'
        }
    })
}
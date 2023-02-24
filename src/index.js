

import {
    addNewCardsOnServer,
    getCardsFromServer,
    patchingProfile,
    showLikes,
    showUser,
    updateAvatar
} from "./components/api"




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

//добавление картинок "из коробки"
// initialCards.forEach(function (element) {
//     const cardAdd = createCard(element.name, element.link);
//     elementsList.prepend(cardAdd);
// });




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


// formProfile.addEventListener('submit', (evt => {
//
//     profileName.textContent = nameInput.value;
//     profileStatus.textContent = jobInput.value;
//     closePopup(popupProfileOpenClose);
// }));
//редактирование имени профиля и хобби с сохранением
function saveRedactionProfile (evt){
    loading(true)
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;

    closePopup(popupProfileOpenClose);
    patchingProfile(nameInput.value,jobInput.value)
        .finally(()=>{
        loading(false)
    })

}
formProfile.addEventListener('submit', saveRedactionProfile)

//функция открывающая окошко добавление картинки
function openedPopupImage() {
   // buttonOpenPopupCreateImage.classList.add('popup__button_disabled')
    openPopup(imagePopupOpen);
}
buttonAddImageProfile.addEventListener('click', openedPopupImage);

//функция открывающая окошко добавление картинки для изменения аватара
function openedPopupChangeAvatar (){
    openPopup(avatarChangePopup)
}
buttonOnpenAvatar.addEventListener('click', openedPopupChangeAvatar )



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



enableValidation({
    formSelector: '.popup__admin',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_error',
    errorClass: 'popup__input-error_active'
});

 //let qwe = document.querySelector('.qwe')
function loading (isLoading){

    popupButtons.forEach((btn) => {
        if (isLoading){
            btn.textContent = 'Сохранение...'
            // console.log(qwe.textContent)
        } else if (btn === buttonOpenPopupCreateImage){
            btn.textContent = 'Создать'
        }
        else {
            btn.textContent = 'Сохранить'
        }
    })

}
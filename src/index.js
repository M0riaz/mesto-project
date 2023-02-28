import {
    addNewCardsOnServer,
    getCardsFromServer,
    getError,
    patchingProfile,
    showUser,
    updateAvatar
} from "./components/api"

import {
    enableValidation,
} from "./components/validate.js";

import {
    profileButtonOpenClose,
    formNewPlace,
    formProfile,
    nameInput,
    jobInput,
    buttonAddImageProfile,
    elementsList,
    profileName,
    profileStatus,
    popupProfileOpenClose,
    imagePopupOpen,
    linkInput,
    placeInput,
    avatarChangePopup,
    buttonOnpenAvatar,
    profileAvatar, formNewAvatar, inputAvatar
} from "./components/consts.js";

import {createCard} from "./components/card.js"

import './pages/index.css';

import {closePopup, openPopup,  loading} from "./components/modal";


//функция добавляющая карточки в разметку
function renderCard(card, container) {
    container.prepend(card);
}

// вызов функции отображающий карточки с сервера
export let userId

Promise.all([getCardsFromServer(),showUser()])
    .then(([cards, user]) =>{
        profileName.textContent = user.name
         profileStatus.textContent = user.about
         profileAvatar.src = user.avatar
        userId = user._id
       // console.log(user)
        console.log(userId)
        cards.forEach(function (card) {
        elementsList.append(createCard(card));
        })
    })
    .catch(getError)

//функция добавляющая картинки на страницу через popup img
function submitCardForm(evt) {
    loading(true)
    evt.preventDefault();
    addNewCardsOnServer(placeInput.value, linkInput.value)
        .then((card) => {
            const newCard = createCard(card);
            renderCard(newCard, elementsList);
            closePopup(imagePopupOpen)
            evt.target.reset()
        })
        .catch(getError)
        .finally(() => {
            loading(false)
        })
}

formNewPlace.addEventListener('submit', submitCardForm);

//функция открывающая окошко popup профиля
function openPopupEditProfile() {
    nameInput.value = profileName.textContent
    jobInput.value = profileStatus.textContent
    openPopup(popupProfileOpenClose);
}
profileButtonOpenClose.addEventListener('click', openPopupEditProfile);

//редактирование имени профиля и хобби с сохранением
function saveRedactionProfile(evt) {
    loading(true)
    evt.preventDefault();
    patchingProfile(nameInput.value, jobInput.value)
        .then(() => {
            profileName.textContent = nameInput.value
            profileStatus.textContent = jobInput.value
            closePopup(popupProfileOpenClose);
        })
        .catch(getError)
        .finally(() => {
            loading(false)
        })

}

formProfile.addEventListener('submit', saveRedactionProfile)

//функция открывающая окошко добавление картинки
function openedPopupImage() {
    openPopup(imagePopupOpen);
}

buttonAddImageProfile.addEventListener('click', openedPopupImage);

//функция открывающая окошко добавление картинки для изменения аватара
function openedPopupChangeAvatar() {
    openPopup(avatarChangePopup)
}
buttonOnpenAvatar.addEventListener('click', openedPopupChangeAvatar)


//функция обновляющая аватар пользователя

function submitNewAvatar(evt) {
    loading(true)
    evt.preventDefault();
    updateAvatar(inputAvatar.value)
        .then(() => {
            profileAvatar.src = inputAvatar.value;
            closePopup(avatarChangePopup);
            evt.target.reset()
        })
        .catch(getError)
        .finally(() => {
            loading(false)
        })
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



export function getLikeData(card) {
    return {
        count: card.likes.length,
        isOwnerLike: card.likes.some(like => {
            return like._id === userId
        })
    }
}
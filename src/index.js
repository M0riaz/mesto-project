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
function renderCards() {
    return getCardsFromServer()
        .then((cards) => {
            cards.forEach(function (card) {
                const cardAdd = createCard(card);
                elementsList.append(cardAdd);

            })
        })
}
renderCards()

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
    addNewCardsOnServer(placeInput.value, linkInput.value)
        .then((card) => {
            const newCard = createCard(card);
            renderCard(newCard, elementsList)
        })
        .finally(() => {
            loading(false)
        })
    closePopup(imagePopupOpen)
    evt.target.reset()
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
    profileName.textContent = nameInput.value
    profileStatus.textContent = jobInput.value

    patchingProfile(nameInput.value, jobInput.value)
        .finally(() => {
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
function openedPopupChangeAvatar() {
    openPopup(avatarChangePopup)
}

buttonOnpenAvatar.addEventListener('click', openedPopupChangeAvatar)


//функция обновляющая аватар пользователя
function submitNewAvatar(evt) {
    loading(true)
    evt.preventDefault();
    updateAvatar(inputAvatar.value)
        .finally(() => {
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
function loading(isLoading) {

    popupButtons.forEach((btn) => {
        if (isLoading) {
            btn.textContent = 'Сохранение...'
        } else if (btn === buttonOpenPopupCreateImage) {
            btn.textContent = 'Создать'
        } else {
            btn.textContent = 'Сохранить'
        }
    })
}

export function getLikeData(card) {
    return {
        count: card.likes.length,
        isOwnerLike: card.likes.some(like => {
            return like._id === myId
        })
    }
}
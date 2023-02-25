//функция создающая карточки
import {bigImagePopup, cardTemplate, popupImage, popupImageComment, id} from "./consts.js";
import {openPopup, closePopup, closeByEscape, closeAnyPopup} from "./utils.js";
import {array, deleteLike, deliteCardOnServer, getLike, myId} from "./api";
import {getLikeData} from "../index";

export function createCard(card) {
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);
    const elementImage = cardElem.querySelector('.elements__image');
    const elementTitle = cardElem.querySelector('.elements__title');
    const deleteBtn = cardElem.querySelector('.elements__delite-button')
    const likeBtn = cardElem.querySelector('.elements__button');
    const likeCounter = cardElem.querySelector('.elements__like-counter');

//удаление карточки
    if (card.owner._id !== myId) {
        deleteBtn.remove()
    } else {
        deleteBtn.addEventListener('click', function () {
            deliteCardOnServer(card._id)
            cardElem.remove()
        });
    }

    elementImage.src = card.link;
    elementTitle.textContent = card.name;
    elementImage.alt = card.name;


    function renderingLikes(card) {
        let likeData = getLikeData(card)
        likeCounter.textContent = likeData.count
        if (likeData.isOwnerLike) {
            likeBtn.classList.add('elements__button_active')
        } else {
            likeBtn.classList.remove('elements__button_active')
        }
    }
    renderingLikes(card)

    //лайк карточки
    likeBtn.addEventListener('click', function () {

        if (likeBtn.classList.contains('elements__button_active')) {
            deleteLike(card._id)
                .then(res => {
                    renderingLikes(res)
                })
        } else {
            getLike(card._id)
                .then(res => {
                    renderingLikes(res)
                })
                }

    });

// попап с большой картинкой
    elementImage.addEventListener('click', function () {
        popupImage.src = card.link;
        popupImageComment.textContent = card.name;
        popupImage.alt = card.name;

        openPopup(bigImagePopup)
    })

    return cardElem
}

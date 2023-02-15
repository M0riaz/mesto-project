//функция создающая карточки
import {bigImagePopup, cardTemplate} from "./consts.js";
import {openPopup} from "../index.js";

export function createCard(cardName, linkImage) {
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

        openPopup(bigImagePopup)
    })
    return cardElem
}
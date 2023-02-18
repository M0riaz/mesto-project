//функция создающая карточки
import {bigImagePopup, cardTemplate, popupImage, popupImageComment} from "./consts.js";
import {openPopup, closePopup, closeByEscape, closeAnyPopup} from "./utils.js";

export function createCard(cardName, linkImage) {
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);
    const elementImage = cardElem.querySelector('.elements__image');
    const elementTitle = cardElem.querySelector('.elements__title');
    const deleteBtn = cardElem.querySelector('.elements__delite-button');
    const likeBtn = cardElem.querySelector('.elements__button');
    elementImage.src = linkImage;
    elementTitle.textContent = cardName;
    elementImage.alt = cardName;
//удаление карточки
    deleteBtn.addEventListener('click', function (evt) {
        evt.target.closest('.elements__card').remove()
    });
    //лайк карточки
    likeBtn.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__button_active');
    });
// попап с большой картинкой
    elementImage.addEventListener('click', function () {
        popupImage.src = linkImage;
        popupImageComment.textContent = cardName;
        popupImage.alt = cardName;

        openPopup(bigImagePopup)
    })
    return cardElem
}
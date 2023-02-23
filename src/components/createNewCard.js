//функция создающая карточки
import {bigImagePopup, cardTemplate, popupImage, popupImageComment, id} from "./consts.js";
import {openPopup, closePopup, closeByEscape, closeAnyPopup} from "./utils.js";
import {array, deliteCardOnServer, myId} from "./api";



export function createCard(cardName, linkImage, likes, trashBucket, card) {
   // console.log(`Card id is ${card}`)
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);
    const elementImage = cardElem.querySelector('.elements__image');
    const elementTitle = cardElem.querySelector('.elements__title');
    const deleteBtn = cardElem.querySelector('.elements__delite-button')
    const likeBtn = cardElem.querySelector('.elements__button');
    const likeCounter = cardElem.querySelector('.elements__like-counter');


//удаление карточки
    if(!trashBucket){
        deleteBtn.remove()
    } else {
        deleteBtn.addEventListener('click', function () {
            deliteCardOnServer(card)
            cardElem.remove()
    });
    }



    elementImage.src = linkImage;
    elementTitle.textContent = cardName;
    elementImage.alt = cardName;
    likeCounter.textContent = likes;






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

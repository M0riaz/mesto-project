//функция открытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

//функция закрытия попапа
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

//функция закрывающая любой попап на клик по оверлею или по кнопке крестика
import {popups} from "./consts";

export function closeAnyPopup(){
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
export function closeByEscape(evt){
    if (evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup)
    }
}
import {elementsList, likeCountShow, nameInput, profileAvatar, profileName, profileStatus} from "./consts";
import {createCard} from "./createNewCard";

export const myId = '342d9355557abfcd73d1c01d';

const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
    headers: {
        authorization: 'c920339b-2c17-46f2-a77c-c209db7e0a7d',
        'Content-Type': 'application/json'
    }
}

function checkedStatus (res)  {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
}

function getError (err){
    console.log('ой что то не так с отображением карточек ' + err)
}

// отображает карточки с сервера
export const getCardsFromServer = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(checkedStatus)

        .catch(getError)
}


// информация о пользователе
export const showUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(checkedStatus)

        .catch(getError)

}

// редактирование информации о пользователе
export const patchingProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(checkedStatus)

        .catch(getError)

}

// добавление новой карточки на сервер
export const addNewCardsOnServer = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(checkedStatus)

        .catch(getError)
}

//удаление карточки с сервера
export const deliteCardOnServer = (idCard) => {
    return fetch(`${config.baseUrl}/cards/${idCard}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: idCard
        })
    })
        .then(checkedStatus)

        .catch(getError)
}


//поставить лайк
export const getLike = (idCard) => {
    return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
        method: 'PUT',
        headers: config.headers,
    })
        .then(checkedStatus)

        .catch(getError)
}

// удалить лайк
export const deleteLike = (idCard) => {
    return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(checkedStatus)

        .catch(getError)
}
// обновить аватар
export const updateAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar `, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatar
        })
    })
        .then(checkedStatus)

        .catch(getError)
}


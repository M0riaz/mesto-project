import {elementsList, likeCountShow, nameInput, profileName, profileStatus} from "./consts";
import {createCard} from "./createNewCard";
import {initialCards} from "./cards";

export const myId = '342d9355557abfcd73d1c01d';
// const myCohort = 'plus-cohort-21';
// const myToken = 'c920339b-2c17-46f2-a77c-c209db7e0a7d';
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
    headers: {
        authorization: 'c920339b-2c17-46f2-a77c-c209db7e0a7d',
        'Content-Type': 'application/json'
    }
}





// отображает карточки с сервера
export const getCardsFromServer = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })

        .then((cards) => {
            console.log(cards)
            cards.forEach(function (cards) {
                const cardAdd = createCard(cards.name, cards.link, cards.likes.length, cards.owner._id === myId, cards._id);
                elementsList.append(cardAdd);
            })
        })

        .catch(err => {
            console.log('ой что то не так ' + err)
        })
}
getCardsFromServer()

// информация о пользователе
export const showUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .then(res => {
          //  console.log(res)
            profileName.textContent = res.name
            profileStatus.textContent = res.about
            document.querySelector('.profile__avatar').src = res.avatar
        })
        .catch(err => {
            console.log('ой что то не так ' + err)
        })


}
showUser()

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
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        // .then(data => {
        //     //console.log(data) //-------------------------------------------------
        // })
        .catch(err => {
            console.log('ой что то не так ' + err)
        })

}
//patchingProfile()


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
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        // .then(data => {
        //    // console.log(data) //-------------------------------------------------
        // })

        .catch(err => {
            console.log('ой что то не так ' + err)
        })
}
//ddNewCardsOnServer()

export const deliteCardOnServer = (idCard) => {
    return fetch(`${config.baseUrl}/cards/${idCard}`,{
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            _id: idCard
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })

        .catch(err => {
            console.log('ой что то не так ' + err)
        })
}


deliteCardOnServer()



//${idCard}





//export let array = []
// тест
//
// //
// export const getCar = () => {
//     return fetch(`${config.baseUrl}/cards`, {
//         headers: config.headers
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             return Promise.reject(`Ошибка: ${res.status}`)
//         })
//
//
// //
//         .then(res => {
//           let qwe = res.map(elem => { return  elem._id })
//                 console.log(qwe)
//                 //qwe.forEach(elem => document.querySelector('.elements__delite-button').remove() )
//
//
//
//         })
//         .catch(err => {
//             console.log('ой что то не так ' + err)
//         })
// }
// // //console.log(array)
// getCar()
// //

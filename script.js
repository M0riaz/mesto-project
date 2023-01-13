const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//функция держащая popup закрытым до вызова по кнопке
function popupHidden() {
    let popup = document.querySelector('.popup_opened');
    popup.style.display = 'none';
}
popupHidden();
//функция держащая popup-image закрытым до вызова по кнопке
function popupImageHidden(){
    let popupImage = document.querySelector('.popup_opened-image');
    popupImage.style.display = 'none';
}
popupImageHidden();


//функция закрывающая окошко popup
function popupClose() {
    let close = document.querySelector('.popup_opened');
    close.style.display = 'none';
}

const popupCloseButton = document.querySelector('.popup__toggle');
popupCloseButton.addEventListener('click', popupClose);

//функция открывающая окошко popup
const profileButtonOpenClose = document.querySelector('.profile__editor');

function popupOpen() {
    let open = document.querySelector('.popup_opened');
    open.style.display = 'flex';
}

profileButtonOpenClose.addEventListener('click', popupOpen)

//редактирования профиля

const formElement = document.querySelector('.popup__admin');
const nameInput = document.querySelector('.popup__item_value_name');
const jobInput = document.querySelector('.popup__item_value_hobby');


function formSubmitHandler(evt) {
    evt.preventDefault();
    let name = document.querySelector('.profile__name');
    name.textContent = nameInput.value;

    let job = document.querySelector('.profile__status');
    job.textContent = jobInput.value;

    let popup = document.querySelector('.popup_opened');
    popup.style.display = 'none';

}
formElement.addEventListener('submit', formSubmitHandler);

//функция открывающая окошко добавление картинки
function popupOpenedImage(){
    let open = document.querySelector('.popup_opened-image');
    open.style.display = 'flex';
}
const buttonAddImageProfile = document.querySelector('.profile__button');
buttonAddImageProfile.addEventListener('click',popupOpenedImage);

//функция закрывающая попап с добавлением картинок
function closePopupImage(){
    let closeButton = document.querySelector('.popup_opened-image');
    closeButton.style.display = 'none';
}
const buttonClosePopupImage = document.querySelector('.popup__toggle-close');
buttonClosePopupImage.addEventListener('click',closePopupImage);

//функция добавляющая картинки на страницу через popup img



// function imageAdd(linkInput, newPlaceInput) {
//     const cardTeamplate = document.querySelector('.card-teamplate').content;
//     const cardElement =cardTeamplate.querySelector('.elements__card').cloneNode(true);
//
//     cardElement.querySelector('.elements__image').textContent = linkInput;
//     cardElement.querySelector('.elements__title').textContent = newPlaceInput;
//
//     elementsList.prepend(cardElement);
// }
//
// const createButton = document.querySelector('.popup__button-create');
//
// createButton.addEventListener('click', function () {
//     const newPlaceInput = document.querySelector('.popup__item_value_new-place');
//     const linkInput = document.querySelector('.popup__item_value_link');
//
//     imageAdd(newPlaceInput.value,linkInput.value)
//     console.log(newPlaceInput)
// })


// function add(addBlock){
//     let cardTeam = document.querySelector('.card-teamplate').content;
//     let cardElem = cardTeam.querySelector('.elements__card').cloneNode(true);
//
//     elementsList.prepend(cardElem)
// }

const elementsList = document.querySelector('.elements__list');

function addImage(imageValue,titleValue) {
    let cardTeam = document.querySelector('#card-template').content;
    let cardElem = cardTeam.querySelector('.elements__card').cloneNode(true);

    cardElem.querySelector('.elements__image').textContent = imageValue;
    cardElem.querySelector('.elements__title').textContent = titleValue;


    elementsList.prepend(cardElem);
}

function formSubmit(evt) {
    evt.preventDefault();
    let linkInput = document.querySelector('.popup__item_value_link');
    let placeInput = document.querySelector('.popup__item_value_new-place');

    addImage(linkInput.value,placeInput.value)

    // let popup = document.querySelector('.popup_opened');
    // popup.style.display = 'none';

}

const submitButton = document.querySelector('.popup__button-create')
submitButton.addEventListener('click', formSubmit);


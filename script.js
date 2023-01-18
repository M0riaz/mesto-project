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
//consts
//закрывающий элемент в popup
const popupCloseButton = document.querySelector('.popup__toggle');
//элемент редактирования профиля(карандашик)
const profileButtonOpenClose = document.querySelector('.profile__editor');
//элемент формы в popup
const formElement = document.querySelector('.popup__admin');
// элемент в popup имя
const nameInput = document.querySelector('.popup__item_value_name');
// элемент в popup хобби
const jobInput = document.querySelector('.popup__item_value_hobby');
// 'элемент большая кнопка в профиле на добавление карточек с картинками
const buttonAddImageProfile = document.querySelector('.profile__button');
// элемент в popup добавление картинок на закрытие (крестик)
const buttonClosePopupImage = document.querySelector('.popup__toggle-close');
// элемент кнопка создать в popup добавление картинок
const submitButton = document.querySelector('.popup__button-create');
// элемент Ul (список карточек, основное хранилище)
const elementsList = document.querySelector('.elements__list');
// элемент тимплейта
const cardTemplate = document.querySelector('.card-template').content;


//функция добавляющая карточки в разметку (из коробки)
initialCards.forEach(function (element){
    const cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);

    cardElem.querySelector('.elements__image').src = element.link;
    cardElem.querySelector('.elements__title').textContent = element.name;
    cardElem.querySelector('.elements__button').addEventListener('click', function (evt) {

        evt.target.classList.remove('.elements__button');
        evt.target.classList.toggle('elements__button_active');
    });


    elementsList.prepend(cardElem)
});


//функция держащая popup закрытым до вызова по кнопке
function popupHidden() {
    let popup = document.querySelector('.popup_opened');
    popup.style.display = 'none';
}
popupHidden();

//функция держащая popup-image закрытым до вызова по кнопке
function popupImageHidden() {
    let popupImage = document.querySelector('.popup_opened-image');
    popupImage.style.display = 'none';
}
popupImageHidden();

//функция закрывающая окошко popup
function popupClose() {

    let close = document.querySelector('.popup_opened');
    close.style.display = 'none';
}
popupCloseButton.addEventListener('click', popupClose);

//функция открывающая окошко popup
function popupOpen() {
    let open = document.querySelector('.popup_opened');
    open.style.display = 'flex';
}
profileButtonOpenClose.addEventListener('click', popupOpen)

//редактирования профиля сохранение имени и хобби
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
function popupOpenedImage() {
    let open = document.querySelector('.popup_opened-image');
    open.style.display = 'flex';
}
buttonAddImageProfile.addEventListener('click', popupOpenedImage);

//функция закрывающая попап с добавлением картинок
function closePopupImage() {
    let closeButton = document.querySelector('.popup_opened-image');
    closeButton.style.display = 'none';
    let linkInput = document.querySelector('.popup__item_value_link');
    let placeInput = document.querySelector('.popup__item_value_new-place');
    linkInput.value = '';
    placeInput.value = '';
}
buttonClosePopupImage.addEventListener('click', closePopupImage);

//функция добавляющая картинки на страницу через popup img и дающая возможность лайкать

function addImage(imageValue, titleValue) {
    let cardElem = cardTemplate.querySelector('.elements__card').cloneNode(true);

    cardElem.querySelector('.elements__image').src = imageValue;
    cardElem.querySelector('.elements__title').alt = titleValue;
    cardElem.querySelector('.elements__title').textContent = titleValue;

    cardElem.querySelector('.elements__button').addEventListener('click', function (evt) {

        evt.target.classList.remove('.elements__button');
        evt.target.classList.toggle('elements__button_active');
    });
    elementsList.prepend(cardElem);
}

function formSubmit(evt) {
    evt.preventDefault();
    let linkInput = document.querySelector('.popup__item_value_link');
    let placeInput = document.querySelector('.popup__item_value_new-place');

    addImage(linkInput.value, placeInput.value)

    let popup = document.querySelector('.popup_opened-image');
    popup.style.display = 'none';
    linkInput.value = '';
    placeInput.value = '';
}
submitButton.addEventListener('click', formSubmit);

const deleteButtons = document.querySelectorAll('.elements__delite-button');

deleteButtons.forEach(function (button){
    button.addEventListener('click', function (){
        document.querySelector('.elements__card').remove()
    })
})
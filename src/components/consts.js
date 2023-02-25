//закрывающий элемент в popup
export const profileCloseButtonCross = document.querySelector('.popup__toggle-edit-button ');
//элемент редактирования профиля(карандашик)
export const profileButtonOpenClose = document.querySelector('.profile__editor');
//форма новое место
export const formNewPlace = document.querySelector('.popup__admin-new-place');
//форма профиль
export const formProfile = document.querySelector('.popup__admin');
// элемент в popup имя
export const nameInput = document.querySelector('.popup__item_value_name');
// элемент в popup хобби
export const jobInput = document.querySelector('.popup__item_value_hobby');
// 'элемент большая кнопка в профиле на добавление карточек с картинками
export const buttonAddImageProfile = document.querySelector('.profile__button');
// элемент Ul (список карточек, основное хранилище)
export const elementsList = document.querySelector('.elements__list');
// элемент тимплейта
export const cardTemplate = document.querySelector('.card-template').content;
// кнопка закрытия у попапа с большой картинкой
export const buttonCloseBigImage = document.querySelector('.popup__toggle-big-image');
// кнопка закрытия у попапа с добавлением картинок
export const popupAddImageClose = document.querySelector('.popup__toggle-add-image');
// элемент профиля имя пользователя
export const profileName = document.querySelector('.profile__name');
// элемент профиля статус
export const profileStatus = document.querySelector('.profile__status');
// попап редактирования профиля и статуса
export const popupProfileOpenClose = document.querySelector('.popup-profile');
//попап редактирования большой картинки
export const bigImagePopup = document.querySelector('.popup_opened-big-image');
// попап редактирования добавления ссылки на картинку подписи с местом
export const imagePopupOpen = document.querySelector('.popup_opened-image');
// выбор всех попапов
export const popups = document.querySelectorAll('.popup');
// поле ввода ссылки для картинки
export const linkInput = document.querySelector('.popup__item_value_link');
// поле ввода названия картинки
export const placeInput = document.querySelector('.popup__item_value_new-place');
// все кнопки закрытия (крестик)
export const closeButtons = document.querySelectorAll('.popup__toggle');
// кнопка 'создать' в попапе добавить место
export const buttonOpenPopupCreateImage = document.querySelector('.popup__button-create');
// большая картинка
export const popupImage = document.querySelector('.popup__image');
// подпись к большой картинке
export const popupImageComment = document.querySelector('.popup__image-comment')
//  кнопка удаления (урна)
export const buttonDeliteOnCard = document.querySelector('.elements__delite-button')
// кнопка на аватаре
export const buttonOnpenAvatar = document.querySelector('.profile__avatar-button');
// попап для изменения картинки на аватаре
export const avatarChangePopup = document.querySelector('.popup-profile-change-avatar')
// форма попапа для изменения аватра
export const formNewAvatar = document.querySelector('.popup__admin-change-avatar')
// картинка аватара
export const profileAvatar = document.querySelector('.profile__avatar')
// поле ввода ссылки для изменения аватара
export const inputAvatar = document.querySelector('.popup__item_value_link-avatar')
// все кнопки типа submit
export const popupButtons = document.querySelectorAll('.popup__button')
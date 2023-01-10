//функция закрывающая окошко popup
function popupClose () {
  let close = document.querySelector('.popup_opened');
  close.style.display = 'none';
}
let popupCloseButton = document.querySelector('.popup__toggle');
popupCloseButton.addEventListener('click',popupClose );

//функция открывающая окошко popup
let profileButtonOpenClose = document.querySelector('.profile__editor');
function popupOpen (){
    let open = document.querySelector('.popup_opened');
    open.style.display = 'flex';
}
profileButtonOpenClose.addEventListener('click', popupOpen)

//функция держащая popup закрытым до вызова по кнопке
function popuphidden(){
    let popup = document.querySelector('.popup_opened');
    popup.style.display = 'none';
}
popuphidden();

// Находим форму в DOM

const formElement = document.querySelector('.popup__admin');
// Воспользуйтесь методом querySelector()

// Находим поля формы в DOM

let nameInput = document.querySelector('.popup__item_value_name');
// Воспользуйтесь инструментом .querySelector()

let jobInput = document.querySelector('.popup__item_value_hobby');
// Воспользуйтесь инструментом .querySelector()


// Обработчик «отправки» формы, хотя пока

// она никуда отправляться не будет

    function formSubmitHandler (evt) {
        evt.preventDefault();
// Эта строчка отменяет стандартную отправку формы.


// Так мы можем определить свою логику отправки.


// О том, как это делать, расскажем позже.



// Получите значение полей jobInput и nameInput из свойства value
let name = document.querySelector('.profile__name');
name.innerHTML = nameInput.value;

let job = document.querySelector('.profile__status');
job.innerHTML = jobInput.value;

// Выберите элементы, куда должны быть вставлены значения полей



// Вставьте новые значения с помощью textContent

    }

// Прикрепляем обработчик к форме:

// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler);
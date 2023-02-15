
 export const showError = (formElement, inputElem, errorMessage) => {
    const formSpan = formElement.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.add('popup__item_error');
    formSpan.textContent = errorMessage;
    formSpan.classList.add('popup__input-error_active')
};

export const hideError = (formElement, inputElem) => {
    const formSpan = formElement.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.remove('popup__item_error')
    formSpan.classList.remove('popup__input-error_active');
    formSpan.textContent = '';
};

export const checkInputValidity = (formElement, inputElem) => {

    if (inputElem.validity.patternMismatch) {
        inputElem.setCustomValidity(inputElem.dataset.errorMessage);
    } else {
        inputElem.setCustomValidity("");
    }

    if(!inputElem.validity.valid){
        showError(formElement, inputElem, inputElem.validationMessage)
    } else {
        hideError( formElement, inputElem)
    }
};

 export const setEventListener = (formElement) => {
    let inputList = Array.from(formElement.querySelectorAll('.popup__item'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonStatus(inputList, buttonElement);
    inputList.forEach((input) =>{
        input.addEventListener('input', function (){
            checkInputValidity(formElement, input);
            toggleButtonStatus(inputList, buttonElement);
        });
    });
}

export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

export const toggleButtonStatus = (inputList, button) => {
    if(hasInvalidInput(inputList)){
        button.classList.add('popup__button_disabled');
        button.classList.remove('popup__button');
        button.setAttribute("disabled", "disabled")
    } else {
        button.classList.remove('popup__button_disabled');
        button.classList.add('popup__button');
        button.removeAttribute("disabled");
    }
}

export const checkAllForms = () =>{
    let formList = Array.from(document.querySelectorAll('.popup__admin'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit',(evt) =>{
            evt.preventDefault();
        });
        setEventListener(formElement)
    });
};

checkAllForms();


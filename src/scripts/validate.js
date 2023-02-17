
 export const showError = (formElement, inputElem, setting, errorMessage) => {
    const formSpan = formElement.querySelector(`.${inputElem.id}-error`);
     inputElem.classList.add(setting.inputErrorClass);
    formSpan.textContent = errorMessage;
     formSpan.classList.add(setting.errorClass)

};


export const hideError = (formElement, inputElem, setting) => {
    const formSpan = formElement.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.remove(setting.inputErrorClass)
    formSpan.classList.remove(setting.errorClass);
    formSpan.textContent = '';
};

export const checkInputValidity = (formElement, inputElem , setting) => {

    if (inputElem.validity.patternMismatch) {
        inputElem.setCustomValidity(inputElem.dataset.errorMessage);
    } else {
        inputElem.setCustomValidity("");
    }

    if(!inputElem.validity.valid){
        showError(formElement, inputElem, setting, inputElem.validationMessage)
    } else {
        hideError( formElement, inputElem, setting)
    }
};

 export const setEventListener = (formElement , setting) => {
    const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
    const buttonElement = formElement.querySelector(setting.submitButtonSelector);
    toggleButtonStatus(inputList, buttonElement, setting);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonStatus(inputList, buttonElement, setting);
        }, 0);
    });

    inputList.forEach((input) => {
        input.addEventListener('input', function (){
            checkInputValidity(formElement, input, setting);
            toggleButtonStatus(inputList, buttonElement, setting);
        });
    });
};

export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

export const toggleButtonStatus = (inputList, button, setting) => {
    if(hasInvalidInput(inputList)){
        button.classList.add(setting.inactiveButtonClass);
        button.setAttribute("disabled", "disabled")
    } else {
        button.classList.remove(setting.inactiveButtonClass);
        button.removeAttribute("disabled");
    }
};

export const enableValidation = (setting) =>{
    const formList = Array.from(document.querySelectorAll(setting.formSelector));
    formList.forEach((formElement) => {
        setEventListener(formElement, setting)
    });
};



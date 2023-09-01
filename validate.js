/* 
// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}); 

enableValidation({
  formSelector: ".popup-profile__form",
  inputSelector: ".popup-profile__input-name",

  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup-profile__input-name_type_error",
  errorClass: "popup__error_visible"
}); 
*/

// Selecciona todos los elementos del formulario necesarios y los asigna a las constantes

const formSelector = document.querySelector('.profile-form');
const inputSelector = formSelector.querySelector('.profile-form__input');
//const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);

// Escribe el código de la primera función, que muestra el elemento erróneo
const showError = (formSelector, inputSelector, errorMessage) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('profile-form__input_type_error');
  errorClass.textContent = errorMessage;
  errorClass.classList.add('profile-form__error_active');
  
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideError = (formSelector, inputSelector) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('profile-form__input_type_error');
  errorClass.classList.remove('profile-form__error_active');
  errorClass.textContent = ""
};


// Escribe el código de la tercera función, que comprueba si el campo es válido
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showError(formSelector, inputSelector, inputSelector.validationMessage); /*, inputSelector.validationMessage);*/
  } else {
    // Si es válido, oculta el elemento erróneo
    hideError(formSelector, inputSelector);
  }
};

const setEventListeners = (formSelector) => {
// Encuentra todos los campos dentro del formulario y
  // crea un array a partir de estos, utilizando el método Array.from()
  const inputList = Array.from(formSelector.querySelectorAll(".profile-form__input"));
   // Itera sobre el array obtenido
   inputList.forEach((inputSelector) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputSelector.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      // y pásale el formulario y el elemento a comprobar
      checkInputValidity(formSelector, inputSelector)
    });
  });
}; 

const enableValidation = () => {
  // Encontrará todos los formularios con la clase especificada en el DOM y
  // creará un array, a partir de estos, utilizando el método Array.from()
  const formList = Array.from(document.querySelectorAll(".profile-form"));
  // Itera sobre el array obtenido
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", (evt) => {
      // Cancela el comportamiento por defecto de cada formulario
      evt.preventDefault();
    });
    // Llama a la función setEventListeners() para cada formulario
    // tomando un elemento del formulario como argumento
    setEventListeners(formSelector);
  });
};

// Llama a la función
enableValidation();

  

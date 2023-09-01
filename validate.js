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
}); */

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

// La función toma un array formado por campos

const hasInvalidInput = (inputList) => {
  // itera sobre el array utilizando el método some()
  return inputList.some((inputSelector) => {
        // Si el campo no es válido, el callback devolverá true.
    // El método se detendrá entonces, y la función hasInvalidInput() devolverá true
    // hasInvalidInput devuelve true

    return !inputSelector.validity.valid;
  })
}; 

// La función toma un array formado por los campos de entrada
// y el elemento botón, que debe cambiar su estado

const toggleButtonState = (inputList, submitButtonSelector) => {
  // Si hay al menos una entrada que no es válida
  if (hasInvalidInput(inputList)) {
    // hace que el botón esté inactivo
    submitButtonSelector.classList.add("profile-form__button_inactive");
  } else {
        // en caso contrario, lo hace activo
    submitButtonSelector.classList.remove("profile-form__button_inactive");
  }
}; 

const setEventListeners = (formSelector) => {
// Encuentra todos los campos dentro del formulario y
  // crea un array a partir de estos, utilizando el método Array.from()
  const inputList = Array.from(formSelector.querySelectorAll(".profile-form__input"));
  const submitButtonSelector = formSelector.querySelector(".profile-form__button");
  // Llama a toggleButtonState() antes de empezar a detectar el evento de entrada
  toggleButtonState(inputList, submitButtonSelector);
   // Itera sobre el array obtenido
   inputList.forEach((inputSelector) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputSelector.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      // y pásale el formulario y el elemento a comprobar
      checkInputValidity(formSelector, inputSelector);
      // Llama a toggleButtonState() y pásale un array de campos y el botón
      toggleButtonState(inputList, submitButtonSelector);
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





  

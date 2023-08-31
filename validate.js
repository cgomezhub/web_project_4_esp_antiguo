/* enableValidation({
  formSelector: ".popup-profile__form",
  inputSelector: ".popup-profile__input-name",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup-profile__input-name_type_error",
  errorClass: "popup__error_visible"
}); 
*/

// Selecciona todos los elementos del formulario necesarios y los asigna a las constantes

const formSelector = document.querySelector('.popup-profile__form');
const inputSelector = formSelector.querySelector('.popup-profile__input-name');
const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);

// Escribe el código de la primera función, que muestra el elemento erróneo
const showError = (input)/*, errorMessage)*/ => {
  input.classList.add('popup-profile__input-name_type_error');
  //inputErrorClass.textContent = errorMessage;
  errorClass.classList.add('popup-profile__error_active');
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideError = (input) => {
  input.classList.remove('popup-profile__input-name_type_error');
  errorClass.classList.remove('popup-profile__error_active');
 // inputNameError.textContent = "";*
};


// Escribe el código de la tercera función, que comprueba si el campo es válido
const checkInputValidity = () => {
  if (!formSelector.validity.valid){
    // Si NO lo es (!), muestra el elemento erróneo
    showError(inputSelector); /*, inputSelector.validationMessage);*/
  } else {
    // Si es válido, oculta el elemento erróneo
    hideError(inputSelector);
  }
};


formSelector.addEventListener('submit', function (evt) {
  // Cancela el comportamiento del navegador por defecto
  evt.preventDefault();
});

// Llama a la función chckInputValidity() para cada entrada de caracteres
inputSelector.addEventListener('input', checkInputValidity()); /*function() {
   checkInputValidity();
});*/

//////

/*

const profileInputAbout = profileForm.querySelector(
    '.popup-profile__input-about'
);
const inputAboutError = profileForm.querySelector(`.${profileInputAbout.id}-error`);
  

// escribe 1er function que oculta al elemento erroneo
const showInputAboutError = (input) => {
    input.classList.add('popup-profile__input-about_type_error');
    inputAboutError.textContent = errorMesage;
    inputAboutError.classList.add("popup-profile__input-about_type_error")


  };
// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideInputAboutError = (input) => {
    input.classList.remove('popup-profile__input-about_type_error');
    inputAboutError.classList.remove("popup-profile__input-about_type_error");
    inputAboutError.textContent = "";

};
// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValidAbout = () => {
  if (!profileInputAbout.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputAboutError(profileInputAbout, profileInputAbout.validationMessage);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputAboutError(profileInputAbout);
  }
};

profileForm.addEventListener('submit', function (evt) {
  // Cancela el comportamiento del navegador por defecto
  evt.preventDefault();
});

// Llama a la función isValid() para cada entrada de caracteres
profileInputAbout.addEventListener('Inpu', function(){
    isValidAbout();    
});
*/

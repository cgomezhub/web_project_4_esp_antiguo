/*
enableValidationPopupProfile({
    profileForm: ".popup-profile__form",
    profileInputName: ".popup-profile__input-name",
    profileInputAbout: ".popup-profile__input-about",
    submitProfileButton: ".popup-profile__button",
    inactiveProfileButton: "popup-profile__button_disabled",
    inputErrorClass: "popup-profile__input_type_error",
    errorClass: "popup-profile__error_visible"
});*/

// Selecciona todos los elementos del formulario necesarios y los asigna a las constantes
const profileForm = document.querySelector(".popup-profile__form");
const profileInputName = profileForm.querySelector(".popup-profile__input-name");
const profileInputAbout = profileForm.querySelector(".popup-profile__input-about");

/*profileForm.addEventListener("submit", function (evt) {
  // Cancela el comportamiento del navegador por defecto
  evt.preventDefault();
});*/

// Agrega el controlador de eventos input
profileInputName.addEventListener("input", function (evt) {
  // Muestra en la consola los valores de la propiedad validity.valid que pertenece al campo de entrada 
  // en el que estamos detectando el evento input
  console.log(evt.target.validity.valid);
});

profileInputAbout.addEventListener("input", function (evt) {
    // Muestra en la consola los valores de la propiedad validity.valid que pertenece al campo de entrada 
    // en el que estamos detectando el evento input
    console.log(evt.target.validity.valid);
  });

/* Primero, selecciona todos los elementos necesarios del formulario, y asígnalos a variables
const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");*/

// Escribe el código de la primera función, que muestra el elemento erróneo
const showInputError = (element) => {
  element.classList.add("popup-profile__input_type_error");
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideInputError = (element) => {
  element.classList.remove("popup-profile__input_type_error");
};

// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValidName = () => {
  if (!profileInputName.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputError(profileInputName);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputError(profileInputName);
  }
};

profileForm.addEventListener("submit", function (evt) {
    // Cancela el comportamiento del navegador por defecto
    evt.preventDefault();
  });

// Llama a la función isValid() para cada entrada de caracteres
profileInputName.addEventListener("Input se ejecuta", isValidName);



// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValidAbout = () => {
    if (!profileInputAbout.validity.valid) {
      // Si NO lo es (!), muestra el elemento erróneo
      showInputError(profileInputAbout);
    } else {
      // Si es válido, oculta el elemento erróneo
      hideInputError(profileInputAbout);
    }
  };
  
  profileForm.addEventListener("submit", function (evt) {
      // Cancela el comportamiento del navegador por defecto
      evt.preventDefault();
    });
   
  
  // Llama a la función isValid() para cada entrada de caracteres
  profileInputAbout.addEventListener("Input se ejecuta", isValidAbout);
  







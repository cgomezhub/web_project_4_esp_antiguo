let btnAbrir = document.querySelector(".button-perfil");
let ventaEmergente = document.querySelector(".popup");
let btnCerrar = document.querySelector(".popup__close");

btnAbrir.addEventListener('click', () => { ventaEmergente.style.display = 'block'; });
btnCerrar.addEventListener('click', () => { ventaEmergente.style.display = 'none';}); 

let formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popup__name");
    let jobInput = document.querySelector(".popup__acerca");

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente    
    let nameValue = nameInput.value; 
    let jobValue = jobInput.value; 
   
    // Selecciona los elementos donde se introducirán los valores de los campos
    let nameDisplay = document.querySelector(".profile__nombre"); 
    let jobDisplay = document.querySelector(".profile__acerca");

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()

    nameDisplay.textContent = nameValue;
    jobDisplay.textContent = jobValue;
}

formElement.addEventListener('submit', handleProfileFormSubmit);


let heartImage = document.querySelector(".element__heart");

heartImage.addEventListener("click", function() {
 if (heartImage.src.includes("images/heart.svg")){heartImage.src = "images/Black-heart.png";} else {heartImage.src = "images/heart.svg"; } });



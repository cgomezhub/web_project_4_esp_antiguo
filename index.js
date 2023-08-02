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
    let nameValue = nameInput.value; 
    let jobValue = jobInput.value; 
    let nameDisplay = document.querySelector(".profile__nombre"); 
    let jobDisplay = document.querySelector(".profile__acerca");
    jobDisplay.textContent = jobValue;
    nameDisplay.textContent = nameValue;
}
formElement.addEventListener('submit', handleProfileFormSubmit);

let heartImage = document.querySelectorAll(".element__heart");
heartImage.forEach((boton) =>{boton.addEventListener("click", () => {
 if (boton.src.includes("images/heart.svg")){boton.src = "images/Black-heart.png";} 
 else {boton.src = "images/heart.svg"; } });});



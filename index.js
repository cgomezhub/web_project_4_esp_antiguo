
let editButton = document.querySelector(".button-perfil");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".popup__guardar");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__acerca");
let nombre = document.querySelector(".profile__nombre");
let job = document.querySelector(".profile__acerca");

editButton.addEventListener('click', function() {
    nameInput.value = nombre.textContent;
    jobInput.value = job.textContent;
    popup.style.display = 'block';
});
closeButton.addEventListener('click', function() {
     popup.style.display = 'none';
}); 

let formElement = document.querySelector(".popup__container");
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameDisplay = document.querySelector(".profile__nombre"); 
    let jobDisplay = document.querySelector(".profile__acerca");
    let nameInput = document.querySelector(".popup__name");
    let jobInput = document.querySelector(".popup__acerca");
    let nameValue = nameInput.value; 
    let jobValue = jobInput.value; 
    nameDisplay.textContent = nameValue;
    jobDisplay.textContent = jobValue;
    
}
formElement.addEventListener('submit', handleProfileFormSubmit);

let heartImage = document.querySelectorAll(".element__heart");
heartImage.forEach((boton) =>{
    boton.addEventListener("click", () => {
         if (boton.src.includes("images/heart.svg")){
            boton.src = "images/Black-heart.png";
        } 
        else {boton.src = "images/heart.svg"; 
        }    
    });
});

let btnAdd = document.querySelector(".button-lugar");
let ventaModal = document.querySelector(".popup-add");
let btnClose = document.querySelector(".popup-add__close");
btnAdd.addEventListener('click', () => { ventaModal.style.display = 'block'; });
btnClose.addEventListener('click', () => { ventaModal.style.display = 'none';}); 
 

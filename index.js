
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
btnAdd.addEventListener('click', () => { 
    ventaModal.style.display = 'block'; 
});
btnClose.addEventListener('click', () => {
     ventaModal.style.display = 'none';
});

const contenedorGrid = document.querySelector(".elements");
const elementos = [
    {
      imagen: "https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      nombre: " Montana de Yosemite",
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    },
    {
      imagen: "https://images.unsplash.com/photo-1618595723314-c54d51d6e043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80",
      nombre: "Los Arcos",
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    },
    {
      imagen: "https://images.unsplash.com/photo-1657589809154-8212431ee6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      nombre: "Canon Bryce",
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    },
    {
      imagen: "https://images.unsplash.com/photo-1615405147358-f17791e21fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      nombre: "Parque Nacional Zion",      
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    },
    {
      imagen: "https://images.unsplash.com/photo-1678806922638-27bf485490ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      nombre: "Parque Nacional Denali",      
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    },
    {
      imagen: "https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      nombre: "Gran Canon",      
      corazon: "./images/heart.svg",
      eliminar:"./images/Trash.svg"
    }
  ];
  elementos.forEach(elemento => {
    const divElemento = document.createElement('div');
    divElemento.classList.add("element");

    const imagenElemento = document.createElement('img'); 
    imagenElemento.src = elemento.imagen;
    imagenElemento.classList.add("element__image");

    const nombreElemento = document.createElement('h2'); 
    nombreElemento.textContent = elemento.nombre;
    nombreElemento.classList.add("element__title");

    const corazonElemento = document.createElement('img'); 
    corazonElemento.src = elemento.corazon;
    corazonElemento.classList.add("element__heart");

    const eliminarElemento = document.createElement('img'); 
    eliminarElemento.src = elemento.eliminar;
    eliminarElemento.classList.add("element__trash");

    divElemento.appendChild(imagenElemento);
    divElemento.appendChild(nombreElemento);
    divElemento.appendChild(corazonElemento);
    divElemento.appendChild(eliminarElemento);

    contenedorGrid.appendChild(divElemento);
  });
  

const editButton = document.querySelector(".button-perfil");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".popup__guardar");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__acerca");
const nombre = document.querySelector(".profile__nombre");
const job = document.querySelector(".profile__acerca");

editButton.addEventListener('click', function() {
    nameInput.value = nombre.textContent;
    jobInput.value = job.textContent;
    popup.style.display = 'block';
});
closeButton.addEventListener('click', function() {
     popup.style.display = 'none';
}); 
saveButton.addEventListener('click', function() {
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

    const imagenesExpand = document.querySelector(".imagenes-expand");
    const imagenesExpandImage = document.querySelector(".imagenes-expand__image");
    const imagenesExpandTitle = document.querySelector(".imagenes-expand__title");
    const imagenesExpandClose = document.querySelector('.imagenes-expand__close');
    
    imagenElemento.addEventListener("click", () => {
      imagenesExpand.style.display = "block";
      imagenesExpandImage.src = elemento.imagen;
      imagenesExpandTitle.textContent = elemento.nombre;
    });
    
    imagenesExpandClose.addEventListener("click", () =>{
      imagenesExpand.style.display = "none";
    } );
    
    const nombreElemento = document.createElement('h2'); 
    nombreElemento.textContent = elemento.nombre;
    nombreElemento.classList.add("element__title");

    const corazonElemento = document.createElement('img'); 
    corazonElemento.src = elemento.corazon;
    corazonElemento.classList.add("element__heart");

    const eliminarElemento = document.createElement('img'); 
    eliminarElemento.src = elemento.eliminar;
    eliminarElemento.classList.add("element__trash");

    eliminarElemento.addEventListener("click", () =>{
      divElemento.style.display = "none";
  });
    divElemento.appendChild(imagenElemento);
    divElemento.appendChild(nombreElemento);
    divElemento.appendChild(corazonElemento);
    divElemento.appendChild(eliminarElemento);

    contenedorGrid.appendChild(divElemento);
});

const btnAdd = document.querySelector(".button-lugar");
const ventaModal = document.querySelector(".popup-add");
const btnClose = document.querySelector(".popup-add__close");
const crearButton = document.querySelector(".popup-add__crear");
const lugarInput = document.querySelector(".popup-add__lugar");
const httpsInput = document.querySelector(".popup-add__https");

btnAdd.addEventListener('click', () => { 
    ventaModal.style.display = 'block'; 
});
btnClose.addEventListener('click', () => {
     ventaModal.style.display = 'none';
});
crearButton.addEventListener('click', function() {
  ventaModal.style.display = 'none';
}); 

function like(boton) {
  if (boton.src.includes('images/heart.svg')) {
    boton.src = 'images/Black-heart.png';
  } else {
    boton.src = 'images/heart.svg';
  }
}

let formLugar = document.querySelector(".popup-add__container");

function handleLugarFormSubmit(evt) {
  evt.preventDefault();
  const element=document.querySelector(".element").cloneNode(true); 
  const lugarDisplay = element.querySelector(".element__title");
  const httpsDisplay = element.querySelector(".element__image");
  const elementTrash = element.querySelector(".element__trash");
  const elementHeart=element.querySelector(".element__heart");
  const imagenesExpand = document.querySelector(".imagenes-expand");
  const imagenesExpandImage = document.querySelector(".imagenes-expand__image");
  const imagenesExpandTitle = document.querySelector(".imagenes-expand__title");
  const imagenesExpandClose = document.querySelector('.imagenes-expand__close');
  const lugarValue = lugarInput.value; 
  const httpsValue = httpsInput.value;

  lugarDisplay.textContent = lugarValue;
  httpsDisplay.src = httpsValue;

  elementHeart.addEventListener("click",()=>like(elementHeart));
  elementTrash.addEventListener("click", () => {
    element.style.display = "none";
  });
  httpsDisplay.addEventListener("click", () => {
    imagenesExpand.style.display = "block";
    imagenesExpandImage.src = httpsValue;
    imagenesExpandTitle.textContent = lugarValue;
  });
  
  imagenesExpandClose.addEventListener("click", () =>{
    imagenesExpand.style.display = "none";
  } );
  httpsDisplay.addEventListener("click", () => {
    imagenesExpand.style.display = "block";
  });
  contenedorGrid.prepend(element);
  
};
formLugar.addEventListener('submit', handleLugarFormSubmit);

let heartImage = document.querySelectorAll(".element__heart");
heartImage.forEach((boton) =>{
    boton.addEventListener("click", () => like(boton))
});   
  
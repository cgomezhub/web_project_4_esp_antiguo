const buttonEdit = document.querySelector('.button-edit');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileClose = document.querySelector('.popup-profile__close');
const popupProfileInputName = document.querySelector('.popup-profile__input-name');
const popupProfileInputAbout = document.querySelector('.popup-profile__input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

buttonEdit.addEventListener('click', () => {
  popupProfile.classList.add('active');
  popupProfileInputName.value = profileName.textContent;
  popupProfileInputAbout.value = profileAbout.textContent;
});
popupProfileClose.addEventListener('click', () => {
  popupProfile.classList.remove('active');
});

const popupProfileForm = document.querySelector('.popup-profile__form');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileInputName.value;
  profileAbout.textContent = popupProfileInputAbout.value;
  popupProfile.classList.remove('active');
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

const buttonPlace = document.querySelector('.button-place');
const popupAdd = document.querySelector('.popup-add');
const popupAddClose = document.querySelector('.popup-add__close');
const popupAddInputPlace = document.querySelector('.popup-add__input-place');
const popupAddInputHttps = document.querySelector('.popup-add__input-https');

buttonPlace.addEventListener('click', () => {
  popupAdd.classList.add('active');
});
popupAddClose.addEventListener('click', () => {
  popupAdd.classList.remove('active');
});


let imagesExpand = document.querySelector('.images-expand');
let imagesExpandImage = document.querySelector('.images-expand__image');
let imagesExpandTitle = document.querySelector('.images-expand__title');
let imagesExpandClose = document.querySelector('.images-expand__close');

let elements = document.querySelector('.elements');
const elementos = [
  {
    imagen:
      'https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    nombre: ' Montana de Yosemite',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },
  {
    imagen:
      'https://images.unsplash.com/photo-1618595723314-c54d51d6e043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80',
    nombre: 'Los Arcos',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },
  {
    imagen:
      'https://images.unsplash.com/photo-1657589809154-8212431ee6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    nombre: 'Canon Bryce',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },
  {
    imagen:
      'https://images.unsplash.com/photo-1615405147358-f17791e21fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    nombre: 'Parque Nacional Zion',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },
  {
    imagen:
      'https://images.unsplash.com/photo-1678806922638-27bf485490ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
    nombre: 'Parque Nacional Denali',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },

  {
    imagen:
      'https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    nombre: 'Gran Canon',
    corazon: './images/heart.svg',
    eliminar: './images/Trash.svg',
  },
];

elementos.forEach((elemento) => {
  const div = document.createElement('div');
  div.classList.add('element');

  const img = document.createElement('img');
  img.src = elemento.imagen;
  img.classList.add('element__image');

  const h2 = document.createElement('h2');
  h2.textContent = elemento.nombre;
  h2.classList.add('element__title');

  const imgHeart = document.createElement('img');
  imgHeart.src = elemento.corazon;
  imgHeart.classList.add('element__heart');

  const imgRemove = document.createElement('img');
  imgRemove.src = elemento.eliminar;
  imgRemove.classList.add('element__trash');

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(imgHeart);
  div.appendChild(imgRemove);

  elements.appendChild(div);

  imgRemove.addEventListener('click', () => {
    div.style.display = 'none';
  });

  img.addEventListener('click', () => {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = elemento.imagen;
    imagesExpandTitle.textContent = elemento.nombre;
  });

  imagesExpandClose.addEventListener('click', () => {
    imagesExpand.classList.remove('active');
  });
});

function like(boton) {
  if (boton.src.includes('images/heart.svg')) {
    boton.src = 'images/Black-heart.png';
  } else {
    boton.src = 'images/heart.svg';
  }
}

let heartImage = document.querySelectorAll('.element__heart');
heartImage.forEach((boton) => {
  boton.addEventListener('click', () => like(boton));
});

const popupAddForm = document.querySelector('.popup-add__form');

function handleLugarFormSubmit(evt) {
  evt.preventDefault();
  const element = document.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');
  const elementHeart = element.querySelector('.element__heart');

  elementTitle.textContent = popupAddInputPlace.value;
  elementImage.src = popupAddInputHttps.value;

  elementHeart.addEventListener('click', () => like(elementHeart));

  elementTrash.addEventListener('click', () => {
    element.style.display = 'none';
  });

  elementImage.addEventListener('click', () => {
    imagesExpand.classList.add('active');
    imagesExpandImage.src = popupAddInputHttps.value;
    imagesExpandTitle.textContent = popupAddInputPlace.value;
  });

  imagesExpandClose.addEventListener('click', () => {
    imagesExpand.classList.remove('active');
  });

  popupAdd.classList.remove('active');

  elements.prepend(element);
}

popupAddForm.addEventListener('submit', handleLugarFormSubmit);

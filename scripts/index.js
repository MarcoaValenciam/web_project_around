import Card from '../components/Card.js';
import Section  from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { displayOverlay, hideOverlay } from './utils.js';
// ===================================================================================================
// Datos iniciales de las tarjetas
// ===================================================================================================
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

// ===================================================================================================
// Renderizar tarjetas iniciales
// ===================================================================================================
// Crea instancia de la clase Section para manejar las tarjetas
const section = new Section({
  items: initialCards,
  // renderer: createCard  // Esta es la función renderer
  renderer: (cardData) => {
    const card = new Card(cardData, '#card-template');
    return card.generateCard(); // Devuelve el elemento DOM
  }
}, '.elements');

// Renderiza las tarjetas iniciales
section.renderItems();

// ===================================================================================================
// Habilitar popop con formulario para agregar tarjeta
// ===================================================================================================
// Crea objeto de formulario para agregar tarjeta
const addCardPopup = new PopupWithForm(".popup-add-card__container", (formData) => {
  // Obtener los valores del formulario
  const cardData = {
    name: formData.title,
    link: formData.place
  }
  // Crear una nueva tarjeta y agregarla a la galería
  const cardElement = new Card(cardData, '#card-template');
  const cardElementDOM = cardElement.generateCard();
  section.addItem(cardElementDOM);
  addCardPopup.close();
  hideOverlay();
});

// Configurar los event listeners para el popup de agregar tarjeta
addCardPopup.setEventListeners();

// Selectionar el botón de apertura del popup de agregar tarjeta
export let openAddCardPopup = document.querySelector(".profile__place-add-button");
// Agregar event listener para abrir el popup de agregar tarjeta
openAddCardPopup.addEventListener("click", () => {
  addCardPopup.open();
  displayOverlay();
});

// Selectionar el botón de cierre del popup de agregar tarjeta
let closeAddCardPopup = document.querySelector(".popup-add-card__close");
// Agregar event listener para cerrar el popup de agregar tarjeta
closeAddCardPopup.addEventListener("click", () => {
  addCardPopup.close();
  hideOverlay();
});

// Seleccionar el overlay
let overlay = document.querySelector(".overlay");
// Agregar event listener para cerrar el popup de agregar tarjeta al hacer clic en el overlay
overlay.addEventListener('click', () => {
  addCardPopup.close();
  hideOverlay();
});

// ===================================================================================================
// Habilitar popop con formulario para editar perfil
// ===================================================================================================
// Crear instancia de UserInfo para manejar la información del usuario
const userInfo = new UserInfo({ nameSelector: '.profile__info-name', aboutSelector: '.profile__info-activity' });

// Popup de editar perfil
const editProfilePopup = new PopupWithForm('#popup__container', (formData) => {
  // Callback para manejar el envío del formulario
  userInfo.setUserInfo({
    name: formData.name,
    activity: formData.activity
  });
  editProfilePopup.close();
  hideOverlay();
});

// Configurar los event listeners para el popup de editar perfil
editProfilePopup.setEventListeners();

// Seleccionar el botón de apertura del popup de editar perfil
const editButton = document.querySelector('.profile__info-edit-button');
// Agregar event listener para abrir el popup de editar perfil
editButton.addEventListener('click', () => {
  // Obtener la información actual del usuario y rellenar el formulario
  const currentUserInfo = userInfo.getUserInfo();
  editProfilePopup._inputList.forEach(input => {
    input.value = currentUserInfo[input.id];
    input.style.color = "#000";
    input.style.opacity = 1;
  });
  editProfilePopup.open();
  displayOverlay();
});

// Seleccionar el botón de cierre del popup de editar perfil
const closeEditProfilePopup = document.querySelector('.popup__close');
// Agregar event listener para cerrar el popup de editar perfil
closeEditProfilePopup.addEventListener('click', () => {
  editProfilePopup.close();
  hideOverlay();
});

// Agregar event listener para cerrar el popup de editar perfil al hacer clic en el overlay
overlay.addEventListener('click', () => {
  editProfilePopup.close();
  hideOverlay();
});

// ===================================================================================================
// Habilitar popop para ver imagen ampliada
// ===================================================================================================
// Crear instancia de PopupWithImage
const imagePopup = new PopupWithImage('.popup-image__container');
// Función para abrir el popup de imagen ampliada
function openImagePopup(imageLink, imageCaption) {
  imagePopup.open(imageLink, imageCaption);
}

// Configurar los event listeners para el popup de imagen ampliada
imagePopup.setEventListeners();

// Agregar event listener para cerrar el popup de imagen ampliada al hacer clic en el overlay
overlay.addEventListener('click', () => {
  imagePopup.close();
  hideOverlay();
});

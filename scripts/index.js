import {enableValidation, resetForms } from '../scripts/validate.js';

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

initialCards.forEach(function(curretValue){
  // clona el contenido de la etiqueta template
  const cardElement = document.querySelector("#card-template").content.cloneNode(true);
  // añade el contenido
  cardElement.querySelector(".element__pic-display").src = curretValue.link;
  cardElement.querySelector(".element__pic-display").alt = curretValue.name;
  cardElement.querySelector(".element__title-name").textContent = curretValue.name;

  // haz que aparezca en la página
  const elements = document.querySelector('.elements');
  elements.append(cardElement);
});

const buttonFav = document.querySelectorAll(".element__title-fav");
buttonFav.forEach(function(element){
  element.addEventListener("click", function(event){
    const favTarget = event.target;
    if(favTarget.getAttribute("src") === "./images/fav.svg"){
      favTarget.setAttribute("src", "./images/fav_act.png");
    }
    else{
      favTarget.setAttribute("src", "./images/fav.svg");
    }
  });
});

const trashButton = document.querySelectorAll(".element__pic-trash");
trashButton.forEach(function(element){
  element.addEventListener("click", function(event){
    const trashTarget = event.target;
    const cardList = trashTarget.closest(".element");
    cardList.remove();
  });
});

let edit = document.querySelector(".profile__info-edit-button");
edit.addEventListener("click", editPopup);
function editPopup() {
  const name = document.querySelector(".profile__info-name");
  const nameProfile = document.getElementById("name");
  nameProfile.value = name.textContent;
  nameProfile.style.color = "#000";
  nameProfile.style.opacity = 1;

  const activity = document.querySelector(".profile__info-activity");
  const activityProfile = document.getElementById("activity");
  activityProfile.value = activity.textContent;
  activityProfile.style.color = "#000";
  activityProfile.style.opacity = 1;

  const popup = document.getElementById("popup__container");
  popup.style.visibility = "visible";

  const page = document.querySelector(".page");
  page.style.opacity = 0.7;
  displayOverlay();
}

let close = document.querySelector(".popup__close");
close.addEventListener("click", closePopup);
function closePopup(){
  const popup = document.getElementById("popup__container");
  popup.style.visibility = "hidden";

  const popupForm = document.getElementById("popup__container");
  popupForm.rese;

  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
}

let save = document.querySelector(".popup__form-submit");
save.addEventListener("click", savePopup);
function savePopup() {
  const nameProfile = document.getElementById("name");
  const name = document.querySelector(".profile__info-name");
  name.textContent = nameProfile.value;

  const activityProfile = document.getElementById("activity");
  const activity = document.querySelector(".profile__info-activity");
  activity.textContent = activityProfile.value;

  const popup = document.getElementById("popup__container");
  popup.style.visibility = "hidden";

  const page = document.querySelector(".page");
  page.style.opacity = 1;

  update(event);
}

function update(event) {
  event.preventDefault();
}

let openAddCardPopup = document.querySelector(".profile__place-add-button");
openAddCardPopup.addEventListener("click", addPlacePopup);
function addPlacePopup() {
  const titleCard = document.querySelector("#title");
  titleCard.value = "";

  const placeCard = document.querySelector("#place");
  placeCard.value = "";

  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "visible";

  // Llama a la función
  enableValidation();

  const page = document.querySelector(".page");
  page.style.opacity = 0.7;
  displayOverlay();
}

let closeAddCardPopup = document.querySelector(".popup-add-card__close");
closeAddCardPopup.addEventListener("click", closeAddCard);
function closeAddCard(){
  const popupAddCard = document.getElementById("popup-add-card__container");
  popupAddCard.style.visibility = "hidden";
  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
}

let addCard = document.querySelector(".popup-add-card__form-submit");
addCard.addEventListener("click", addCardPlace);
function addCardPlace(event) {
  event.preventDefault();

  const titleCard = document.querySelector("#title");
  const placeCard = document.querySelector("#place");

  // clona el contenido de la etiqueta template
  const cardElement = document.querySelector("#card-template").content.cloneNode(true);
  // // añade el contenido
  cardElement.querySelector(".element__pic-display").src = placeCard.value;
  cardElement.querySelector(".element__pic-display").alt = titleCard.value;
  cardElement.querySelector(".element__title-name").textContent = titleCard.value;

  const likeElement = cardElement.querySelector(".element__title-fav");
  addLikeEvent(likeElement);

  const deleteElement = cardElement.querySelector(".element__pic-trash");
  addDeleteEvent(deleteElement);

  const displayElement = cardElement.querySelector(".element__pic-display");
  addImgEvent(displayElement);

  const elements = document.querySelector('.elements');
  elements.prepend(cardElement);

  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "hidden";

  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
}

const addLikeEvent = (element) => {
  element.addEventListener("click", function(event){
    const favTarget = event.target;
    if(favTarget.getAttribute("src") === "./images/fav.svg"){
      favTarget.setAttribute("src", "./images/fav_act.png");
    }
    else{
      favTarget.setAttribute("src", "./images/fav.svg");
    }
  });
}

const addDeleteEvent = (element) => {
  element.addEventListener("click", function(event){
    const trashTarget = event.target;
    const cardDelete = trashTarget.closest(".element");
    cardDelete.remove();
  });
}

const addImgEvent = (element) => {
  element.addEventListener("click", function(event){
    const imgTarget = event.target;

    const popupImgContainer = document.querySelector(".popup-image__container");
    popupImgContainer.style.visibility = "visible";

    const popupImgClose = document.querySelector(".popup-image__container-close-x");
    popupImgClose.style.visibility = "visible";

    const popupImgDisplay = document.querySelector(".popup-image__container-display");
    popupImgDisplay.src = imgTarget.src;
    popupImgDisplay.style.visibility = "visible";

    const popupImgTitle = document.querySelector(".popup-image__container-title");
    popupImgTitle.textContent = imgTarget.alt;
    popupImgTitle.style.visibility = "visible";

    const page = document.querySelector(".page");
    page.style.opacity = 0.7;
    displayOverlay();
  });
}

let openImgPopup = document.querySelectorAll(".element__pic-display");
openImgPopup.forEach(function(element){
  element.addEventListener("click", function(event){
    const imgTarget = event.target;

    const popupImgContainer = document.querySelector(".popup-image__container");
    popupImgContainer.style.visibility = "visible";

    const popupImgClose = document.querySelector(".popup-image__container-close-x");
    popupImgClose.style.visibility = "visible";

    const popupImgDisplay = document.querySelector(".popup-image__container-display");
    popupImgDisplay.src = imgTarget.src;
    popupImgDisplay.style.visibility = "visible";
    popupImgDisplay.style.zIndex = 0;

    const popupImgTitle = document.querySelector(".popup-image__container-title");
    popupImgTitle.textContent = imgTarget.alt;
    popupImgTitle.style.visibility = "visible";

    const page = document.querySelector(".page");
    page.style.opacity = 0.7;
    displayOverlay();
  });
});

let closePopupImage = document.querySelector(".popup-image__container-close-x");
closePopupImage.addEventListener("click", closeImage);
function closeImage() {
  const popupImgContainer = document.querySelector(".popup-image__container");
  popupImgContainer.style.visibility = "hidden";

  const popupImgClose = document.querySelector(".popup-image__container-close-x");
  popupImgClose.style.visibility = "hidden";

  const popupImgDisplay = document.querySelector(".popup-image__container-display");
  popupImgDisplay.src = "";
  popupImgDisplay.style.visibility = "hidden";

  const popupImgTitle = document.querySelector(".popup-image__container-title");
  popupImgTitle.textContent = "";
  popupImgTitle.style.visibility = "hidden";

  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
};

function displayOverlay(){
  const page = document.getElementById("page");
  const overlay = document.getElementById("overlay");
  overlay.style.width = page.style.width;
  overlay.style.height = window.height;
  overlay.style.display = "block";
  overlay.style.zIndex = 1;
}

function hideOverlay(){
  let overlay = document.getElementById("overlay");
  overlay.style.zIndex = "-1";
  overlay.style.display = "none";
  resetForms();
}

function closeOverlay(){
  closePopup();
  closeAddCard();
  closeImage();
}

let overlay = document.querySelector(".overlay");
overlay.addEventListener('click', closeOverlay);

let popupImage = document.querySelector(".popup-image__container");
popupImage.addEventListener('click', closeOverlay);

document.addEventListener('keydown', function(event) {
  // Comprobar si la tecla presionada es 'Escape'
  if (event.key === 'Escape') {
    closePopup();
    closeAddCard();
    closeImage();
  }
});

// ===================================================================================================
// VALIDACIÓN PARA MÁS DE UN CAMPO
// ===================================================================================================
// ===================================================================================================
// CÓDIGO PRECARGADO
// ===================================================================================================
// // Busquemos el formulario en el DOM
// let formElement = // Utiliza el método querySelector()

// // Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// // no se enviará en ningún sitio todavía

// // Observa que el nombre de la función comienza con un verbo
// // y describe exactamente lo que hace la función
// function handleProfileFormSubmit(evt) {
//     // Esta línea impide que el navegador
//     // entregue el formulario en su forma predeterminada.
//     evt.preventDefault();
//     // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
//     // Lo explicaremos todo con más detalle después.

//     // Busquemos los campos del formulario en el DOM
//     let nameInput = // Utiliza el método querySelector()
//     let jobInput = // Utiliza el método querySelector()

//     // Obtén los valores de cada campo desde la propiedad de valor correspondiente

//     // Selecciona los elementos donde se introducirán los valores de los campos

//     // Inserta nuevos valores utilizando el textContent
//     // propiedad del método querySelector()
// }

// // Conecta el manipulador (handler) al formulario:
// // se observará el evento de entrega
// formElement.addEventListener('submit', handleProfileFormSubmit);

// ===================================================================================================
// VALIDACIÓN CON UN CAMPO
// ===================================================================================================
// // Selecciona todos los elementos del formulario necesarios y los asigna a las constantes
// const formElement = document.querySelector(".popup");
// const formInput = formElement.querySelector(".popup__form");
// formElement.addEventListener("submit", function (evt) {
//   alert(evt);
//   // Cancela el comportamiento del navegador por defecto
//   evt.preventDefault();
// });

// // Agrega el controlador de eventos input
// formInput.addEventListener("input", function (evt) {
//   // Muestra en la consola los valores de la propiedad validity.valid que pertenece al campo de entrada
//   // en el que estamos detectando el evento input
//   alert(evt.target.validity.valid);
//   console.log(evt.target.validity.valid);
// });

// ===================================================================================================
// VALIDACIÓN CON DOS CAMPOS
// ===================================================================================================
// // Primero, selecciona todos los elementos necesarios del formulario, y asígnalos a variables
// const formElement = document.querySelector(".popup");
// const nameTextInput = formElement.querySelector(".popup__form-name-text");
// // Selecciona cada elemento del mensaje de error utilizando su nombre de clase único
// const nameError = formElement.querySelector(`.${nameTextInput.id}-error`);
// //
// const activityTextInput = formElement.querySelector(".popup__form-activity-text");
// // Selecciona cada elemento del mensaje de error utilizando su nombre de clase único
// const activityError = formElement.querySelector(`.${activityTextInput.id}-error`);
// // Escribe el código de la primera función, que muestra el elemento erróneo
// const showInputError = (element, elementError, errorMessage) => {
//   element.classList.add("popup__form_type_error");
//   // Sustituye el contenido del mensaje de error por el argumento errorMessage que ha sido pasado
//   elementError.textContent = errorMessage;
//   // Muestra el mensaje de error
//   elementError.classList.add("popup__form-error_active");
// };

// // Escribe el código de la segunda función, que oculta el elemento erróneo
// const hideInputError = (element, elementError) => {
//   element.classList.remove("popup__form_type_error");
//   // Oculta el mensaje de error
//   elementError.classList.remove("popup__form-error_active");
//   // Restablece el error
//   elementError.textContent = "";
// };

// // Escribe el código de la tercera función, que comprueba si el campo es válido
// const nameIsValid = () => {
//   if (!nameTextInput.validity.valid) {
//     // Si NO lo es (!), muestra el elemento erróneo
//     showInputError(nameTextInput, nameError, nameTextInput.validationMessage);
//   } else {
//     // Si es válido, oculta el elemento erróneo
//     hideInputError(nameTextInput, nameError);
//   }
// };

// // Escribe el código de la tercera función, que comprueba si el campo es válido
// const activityIsValid = () => {
//   if (!activityTextInput.validity.valid) {
//     // Si NO lo es (!), muestra el elemento erróneo
//     showInputError(activityTextInput, activityError, activityTextInput.validationMessage);
//   } else {
//     // Si es válido, oculta el elemento erróneo
//     hideInputError(activityTextInput, activityError);
//   }
// };

// formElement.addEventListener("submit", function (evt) {
//   // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
//   evt.preventDefault();
// });

// // Llama a la función isValid() para cada entrada de caracteres
// nameTextInput.addEventListener("input", nameIsValid);
// // Llama a la función isValid() para cada entrada de caracteres
// activityTextInput.addEventListener("input", activityIsValid);


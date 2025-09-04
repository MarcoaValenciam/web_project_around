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
  cardElement.querySelector(".element__pic-display").alt = ("imagen" + curretValue.name);
  cardElement.querySelector(".element__title-name").textContent = curretValue.name;

  // haz que aparezca en la página
  const elements = document.querySelector('.elements');
  elements.append(cardElement);
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

  const save = document.getElementById("save");
  save.style.backgroundColor = "#000";
  save.style.color = "#fff";
  save.style.opacity = 1;

  const popup = document.getElementById("popup__container");
  popup.style.visibility = "visible";

  const page = document.querySelector(".page");
  page.style.opacity = 0.7;
}

let close = document.querySelector(".popup__close");
close.addEventListener("click", closePopup);
function closePopup(){
  const popup = document.getElementById("popup__container");
  popup.style.visibility = "hidden";
  const page = document.querySelector(".page");
  page.style.opacity = 1;
}

let save = document.querySelector(".popup__form-save-button");
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
  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "visible";
  const page = document.querySelector(".page");
  page.style.opacity = 0.7;
}

let closeAddCardPopup = document.querySelector(".popup-add-card__close");
closeAddCardPopup.addEventListener("click", closeAddCard);
function closeAddCard(){
  const popupAddCard = document.getElementById("popup-add-card__container");
  popupAddCard.style.visibility = "hidden";
  const page = document.querySelector(".page");
  page.style.opacity = 1;
}

let addCard = document.querySelector(".popup-add-card__form-add-button");
addCard.addEventListener("click", addCardPlace);
function addCardPlace() {
  const titleCard = document.getElementById("title");
  const placeCard = document.getElementById("place");

  // clona el contenido de la etiqueta template
  const cardElement = document.querySelector("#card-template").content.cloneNode(true);
  // // añade el contenido
  cardElement.querySelector(".element__pic-display").src = placeCard;
  cardElement.querySelector(".element__pic-display").alt = ("imagen" + titleCard);
  cardElement.querySelector(".element__title-name").textContent = titleCard;
  // haz que aparezca en la página
  const elements = document.querySelector('.elements');
  elements.prepend(cardElement);

  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "hidden";
  const page = document.querySelector(".page");
  page.style.opacity = 1;

  return false;
  // update(event);
}

function update(event) {
  event.preventDefault();
}

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


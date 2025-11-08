import { Card } from './Card.js';
import { cards } from './index.js';

export let edit = document.querySelector(".profile__info-edit-button");
edit.addEventListener("click", editPopup);
export function editPopup() {
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

export let close = document.querySelector(".popup__close");
close.addEventListener("click", closePopup);
export function closePopup(){
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

export let openAddCardPopup = document.querySelector(".profile__place-add-button");
openAddCardPopup.addEventListener("click", addPlacePopup);
export function addPlacePopup() {
  const titleCard = document.querySelector("#title");
  titleCard.value = "";

  const placeCard = document.querySelector("#place");
  placeCard.value = "";

  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "visible";

  const page = document.querySelector(".page");
  page.style.opacity = 0.7;
  displayOverlay();
}

export let closeAddCardPopup = document.querySelector(".popup-add-card__close");
closeAddCardPopup.addEventListener("click", closeAddCard);
export function closeAddCard(){
  const popupAddCard = document.getElementById("popup-add-card__container");
  popupAddCard.style.visibility = "hidden";
  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
}

export let addCard = document.querySelector(".popup-add-card__form-submit");
addCard.addEventListener("click", addCardPlace);
export function addCardPlace(event) {
  event.preventDefault();

  const titleCard = document.querySelector("#title");
  const placeCard = document.querySelector("#place");

  const cardNew = new Card(titleCard.value, placeCard.value, "#card-template");
  cardNew.plusCard();
  cards.unshift(cardNew);

  const popupAdd = document.getElementById("popup-add-card__container");
  popupAdd.style.visibility = "hidden";

  const page = document.querySelector(".page");
  page.style.opacity = 1;

  hideOverlay();
}

export function displayOverlay(){
  const page = document.getElementById("page");
  const overlay = document.getElementById("overlay");
  overlay.style.width = page.style.width;
  overlay.style.height = window.height;
  overlay.style.display = "block";
  overlay.style.zIndex = 1;
}

export function hideOverlay(){
  let overlay = document.getElementById("overlay");
  overlay.style.zIndex = "-1";
  overlay.style.display = "none";
  resetForms();
}

export function closeOverlay(){
  closePopup();
  closeAddCard();
}

export let overlay = document.querySelector(".overlay");
overlay.addEventListener('click', closeOverlay);

export let popupImage = document.querySelector(".popup-image__container");
popupImage.addEventListener('click', closeOverlay);

document.addEventListener('keydown', function(event) {
  // Comprobar si la tecla presionada es 'Escape'
  if (event.key === 'Escape') {
    closePopup();
    closeAddCard();
  }
});

export function resetForms(){
  // Encontrar todos los formularios en el DOM y crear un aaray con ellos
  const formList = Array.from(document.querySelectorAll('form'));
  // Iterar sobre el array obtenido
  formList.forEach((formElement) => {
    formElement.reset();
    const inputList = Array.from(formElement.querySelectorAll(("#").concat(formElement.id, " span")));
    inputList.forEach((spanElement) => {
      // Quita mensaje de error
      spanElement.textContent = "";
    });
  });
}

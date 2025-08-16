let add = document.querySelector(".profile__add-button");
add.addEventListener("click", addPopup);
function addPopup() {
  const nameProfile = document.getElementById("name");
  nameProfile.value = "";
  nameProfile.style.opacity = 0.2;

  const activityProfile = document.getElementById("activity");
  activityProfile.value = "";
  activityProfile.style.opacity = 0.2;

  const save = document.getElementById("save");
  save.style.opacity = 0.2;

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

let fav1 = document.querySelector("#fav1");
favorito(fav1);
let fav2 = document.querySelector("#fav2");
favorito(fav2);
let fav3 = document.querySelector("#fav3");
favorito(fav3);
let fav4 = document.querySelector("#fav4");
favorito(fav4);
let fav5 = document.querySelector("#fav5");
favorito(fav5);
let fav6 = document.querySelector("#fav6");
favorito(fav6);
//
function favorito(fav){
  fav.addEventListener("click", clickFav);
  function clickFav() {
    if(fav.getAttribute("src") == "./images/fav.svg"){
      fav.setAttribute("src", "./images/fav_act.png");
    }
    else{
      fav.setAttribute("src", "./images/fav.svg");
    }
  }
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

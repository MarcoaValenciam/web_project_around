let add = document.querySelector(".profile__add_button");
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

let edit = document.querySelector(".profile_info_edit-button");
edit.addEventListener("click", editPopup);
function editPopup() {
  const name = document.querySelector(".profile__info_name");
  const nameProfile = document.getElementById("name");
  nameProfile.value = name.textContent;
  nameProfile.style.color = "#000";
  nameProfile.style.opacity = 1;

  const activity = document.querySelector(".profile__info_activity");
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

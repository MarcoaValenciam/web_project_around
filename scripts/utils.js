// ===================================================================================================
// Funciones para manejar el overlay
//  ===================================================================================================
export function displayOverlay(){
  const page = document.querySelector(".page");
  page.style.opacity = 0.7;

  const overlay = document.getElementById("overlay");
  overlay.style.width = page.style.width;
  overlay.style.height = window.height;
  overlay.style.display = "block";
  overlay.style.zIndex = 1;
}

export function hideOverlay(){
  const page = document.querySelector(".page");
  page.style.opacity = 1;

  let overlay = document.getElementById("overlay");
  overlay.style.zIndex = "-1";
  overlay.style.display = "none";

  const inputList = Array.from(document.querySelectorAll(".popup__span"));
    inputList.forEach((spanElement) => {
    // Quita mensaje de error
    spanElement.textContent = "";
  });
}

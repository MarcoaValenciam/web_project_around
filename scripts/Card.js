export class Card{
  // Contructor con parametros: datos de la tarjeta (tanto el texto como un enlace a la imagen) y un selector de elemento
  constructor(name, link, cardSelector){
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  // Métodos privados para trabajar con el marcado
  _getTemplate(){
    // clona el contenido de la etiqueta template
    const _cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    return _cardElement;
  }

  _addContentCard(){
// añade el contenido
    this._cardElement.querySelector(".element__pic-display").src = this._link;
    this._cardElement.querySelector(".element__pic-display").alt = this._name;
    this._cardElement.querySelector(".element__title-name").textContent = this._name;
  }

  // Método para añadir controladores de eventos
  _setEventListeners(){
    // Evento like
    this._favTarget = this._cardElement.querySelector(".element__title-fav");
    this._favTarget.addEventListener("click", () => {
      this._handleLikeEvent();
    });

    // Evento delete
    this._deleteElement = this._cardElement.querySelector(".element__pic-trash");
    this._deleteElement.addEventListener("click", (event) => {
      this._handleDeleteEvent(event);
    });

    // Evento mostrar imagen
    this._displayElement = this._cardElement.querySelector(".element__pic-display");
    this._displayElement.addEventListener("click", () => {
      this._handleDisplayImage();
    });

    // Evento cerrar imagen
    this._closePopupImage = document.querySelector(".popup-image__container-close-x");
    this._closePopupImage.addEventListener("click", () => {
      this._handleHideImage();
    });

    this._overlay = document.querySelector(".overlay");
    this._overlay.addEventListener('click', () => {
      this._handleHideImage();
    });

    this._popupImageContainer = document.querySelector(".popup-image__container");
    this._popupImageContainer.addEventListener('click', () => {
      this._handleHideImage();
    });

    this._keyEscCloseImage = document.addEventListener('keydown', (event) => {
      // Comprobar si la tecla presionada es 'Escape'
      if (event.key === 'Escape') {
        this._handleHideImage();
      }
    });
  }
  // Métodos privados para controladores de eventos
  _handleLikeEvent(){
    if(this._favTarget.getAttribute("src") === "./images/fav.svg"){
        this._favTarget.setAttribute("src", "./images/fav_act.png");
    }
    else{
      this._favTarget.setAttribute("src", "./images/fav.svg");
    }
  }

  _handleDeleteEvent(event){
      const trashTarget = event.target;
      const cardDelete = trashTarget.closest(".element");
      cardDelete.remove();
  }

  _handleDisplayImage(){
    const _popupImgContainer = document.querySelector(".popup-image__container");
    _popupImgContainer.style.visibility = "visible";

    const _popupImgClose = document.querySelector(".popup-image__container-close-x");
    _popupImgClose.style.visibility = "visible";

    const _popupImgDisplay = document.querySelector(".popup-image__container-display");
    _popupImgDisplay.src = this._link;
    _popupImgDisplay.style.visibility = "visible";

    const _popupImgTitle = document.querySelector(".popup-image__container-title");
    _popupImgTitle.textContent = this._name;
    _popupImgTitle.style.visibility = "visible";

    const _page = document.querySelector(".page");
    _page.style.opacity = 0.7;

    const _overlay = document.getElementById("overlay");
    _overlay.style.width = page.style.width;
    _overlay.style.height = window.height;
    _overlay.style.display = "block";
    _overlay.style.zIndex = 1;
  }

  _handleHideImage(){
    const _popupImgContainer = document.querySelector(".popup-image__container");
    _popupImgContainer.style.visibility = "hidden";

    const _popupImgClose = document.querySelector(".popup-image__container-close-x");
    _popupImgClose.style.visibility = "hidden";

    const _popupImgDisplay = document.querySelector(".popup-image__container-display");
    _popupImgDisplay.src = "";
    _popupImgDisplay.style.visibility = "hidden";

    const _popupImgTitle = document.querySelector(".popup-image__container-title");
    _popupImgTitle.textContent = "";
    _popupImgTitle.style.visibility = "hidden";

    const _page = document.querySelector(".page");
    _page.style.opacity = 1;

    let _overlay = document.getElementById("overlay");
    _overlay.style.zIndex = "-1";
    _overlay.style.display = "none";
  }

  // Método público que devuelve un elemento card completamente funcional y lleno de datos
  addCard(){
    // Llamado a método para trabajar con el marcado/template
    this._cardElement = this._getTemplate();
    // Llamado a metodo para añadir el contenido de la card
    this._addContentCard();
    // Métodos para el manejo de eventos
    this._setEventListeners();

    const elements = document.querySelector('.elements');
    elements.append(this._cardElement);
  }

  // Método público que devuelve un elemento card completamente funcional y lleno de datos
 plusCard(){
    // Llamado a método para trabajar con el marcado/template
    this._cardElement = this._getTemplate();
    // Llamado a metodo para añadir el contenido de la card
    this._addContentCard();
    // Métodos para el manejo de eventos
    this._setEventListeners();

    const elements = document.querySelector('.elements');
    elements.prepend(this._cardElement);
  }
}

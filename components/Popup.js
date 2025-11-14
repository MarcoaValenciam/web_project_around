export default class Popup {
  constructor(popupSelector) {
    // Guardar referencia al popup
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    // Mostrar popup
    this._popup.style.visibility = "visible";
    // Agregar listener para Esc
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    // Ocultar popup
    this._popup.style.visibility = "hidden";
    // Remover listener para Esc
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    // Lógica para cerrar con Esc
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    // Listener para botón cerrar
    const closeButton = this._popup.querySelector('.popup__close');
    closeButton.addEventListener('click', () => this.close());
    // Listener para overlay
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target === this._popup) {
        this.close();
      }
    });
  }
}
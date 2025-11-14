import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector('.popup-image__container-display');
    this._captionElement = this._popup.querySelector('.popup-image__container-title');
  }
  open(imageLink, imageCaption) {
    this._imageElement.src = imageLink;
    this._imageElement.alt = imageCaption;
    this._captionElement.textContent = imageCaption;
    this._popup.classList.add('popup_opened');
  }
  close() {
    super.close();
    // this._popup.classList.remove('popup_opened');
  }
}
import { FormValidator } from './FormValidator.js';

// Objeto enableValidation con los selectores y las clases del formulario
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

export function enableValidation(enableValidation) {
  // Encontrar todos los formularios en el DOM y crear un aaray con ellos
  const formList = Array.from(document.querySelectorAll('form'));
  // Iterar sobre el array obtenido
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(enableValidation, formElement);
  });
};

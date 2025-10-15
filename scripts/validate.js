// La función toma un array formado por campos
const hasInvalidInput = (inputList) => {
  // itera sobre el array utilizando el método some()
  return inputList.some((inputElement) => {
    // Si el campo no es válido, el callback devolverá true.
    // El método se detendrá entonces, y la función hasInvalidInput() devolverá true
    // hasInvalidInput devuelve true
    return !inputElement.validity.valid;
  })
};

// La función toma un array formado por los campos de entrada
// y el elemento botón, que debe cambiar su estado
const toggleButtonState = (formElement, inputList, buttonElement) => {
  // Si hay al menos una entrada que no es válida
  if (hasInvalidInput(inputList)) {
    // // hace que el botón esté inactivo
    // en caso contrario, lo hace activo
    buttonElement.classList.add(formElement.id.concat("-submit-inactive"));
    buttonElement.disabled = true;
  } else {
    // // en caso contrario, lo hace activo
      // hace que el botón esté inactivo
    buttonElement.classList.remove(formElement.id.concat("-submit-inactive"));
    buttonElement.disabled = false;
  }
};

// Muestra el mensaje de error
const showInputError = (formElement, inputElement, errorMessage) => {
  // Encuentra el elemento del mensaje de error dentro de la propia función
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Agrega estilo al elemento input
  inputElement.classList.add(formElement.id.concat("_type_error"));
  // Agrega texto de error al elemento span
  errorElement.textContent = errorMessage;
  // Asigna estilo a los mensajes de error
  errorElement.classList.add(formElement.id.concat("-error_active"));
};

// Quita el mensaje de error
const hideInputError = (formElement, inputElement) => {
  // Encuentra el elemento del mensaje de error
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Quita el estilo al elemento input
  inputElement.classList.remove(formElement.id.concat("_type_error"));
  // Quita mensaje de error
  errorElement.textContent = "";
  // Quita estilo al elemento span
  errorElement.classList.remove(formElement.id.concat("-error_active"));
};

// Valida el campo
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Muestra el mensaje de error
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Quita el mensaje de error
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  // Crea un array de campos del formulario
  const inputList = Array.from(formElement.querySelectorAll(("#").concat(formElement.id, " input")));
  // Encuentra el botón de envío en el formulario actual
  const buttonElement = formElement.querySelector('input[type="submit"]');
  // Itera los campos del formulario
  inputList.forEach((inputElement) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputElement.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      isValid(formElement, inputElement)
      // Llama a toggleButtonState() y pásale un array de campos y el botón
      toggleButtonState(formElement, inputList, buttonElement);
    });
  });
};

// Llama a la función
enableValidation ({formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
  });

export function enableValidation()  {
  // Encontrar todos los formularios en el DOM y crear un aaray con ellos
  const formList = Array.from(document.querySelectorAll('form'));
  // Iterar sobre el array obtenido
  formList.forEach((formElement) => {
    // Cancela el comportamiento por defecto de cada formulario
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    // Llama a la función setEventListeners() para cada formulario
    setEventListeners(formElement);
  });
};

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

export class FormValidator {
  // Primer parámetro es un objeto de configuración que almacena los selectores y las clases del formulario, y el segundo toma un elemento del formulario a validar.
  constructor(enableValidation, formElement)
  {
    this._enableValidation = enableValidation;
    this._formElement = formElement;
    this._getValidation();
  }

  _getValidation() {
    // Crea un array de campos del formulario
    this._inputList = Array.from(this._formElement.querySelectorAll(this._enableValidation.inputSelector));
    // // Encuentra el botón de envío en el formulario actual
    this._buttonElement = this._formElement.querySelector(this._enableValidation.submitButtonSelector);
    // Llama a la función setEventListeners() para cada formulario
    this._setEventListeners();
  }

  _setEventListeners() {
// Cancela el comportamiento por defecto de cada formulario
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    // Itera los campos del formulario
    this._inputList.forEach((inputElement) => {
      // console.log(inputElement);
      // agrega el controlador de eventos de entrada a cada campo
      inputElement.addEventListener("input", () => {
        // console.log(inputElement);
        // Llama a la función isValid() dentro del callback
        this._handleInputIsValid(inputElement);
        // Llama a toggleButtonState() y pásale un array de campos y el botón
        this._handleButtonSubmit(inputElement);
      });
    });
  }

  // Valida el campo
  _handleInputIsValid(inputElement){
    // Muestra el mensaje de error
    if (!inputElement.validity.valid) {
      // Encuentra el elemento del mensaje de error dentro de la propia función
      const _errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      // Agrega estilo al elemento input
      inputElement.classList.add(this._formElement.id.concat("_type_error"));
      // Agrega texto de error al elemento span
      _errorElement.textContent = inputElement.validationMessage;
      // Asigna estilo a los mensajes de error
      _errorElement.classList.add(this._formElement.id.concat("-error_active"));
    }
    // Quita el mensaje de error
    else {
      // Encuentra el elemento del mensaje de error
      const _errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      // Quita el estilo al elemento input
      inputElement.classList.remove(this._formElement.id.concat("_type_error"));
      // Quita mensaje de error
      _errorElement.textContent = "";
      // Quita estilo al elemento span
      _errorElement.classList.remove(this._formElement.id.concat("-error_active"));
    }
  }

  _handleButtonSubmit(inputElement){
    // Si hay al menos una entrada que no es válida
    if (this._hasInvalidInput(inputElement)) {
      // // hace que el botón esté inactivo
      // en caso contrario, lo hace activo
      this._buttonElement.classList.add(this._formElement.id.concat("-submit-inactive"));
      this._buttonElement.disabled = true;
    } else {
      // // en caso contrario, lo hace activo
        // hace que el botón esté inactivo
      this._buttonElement.classList.remove(this._formElement.id.concat("-submit-inactive"));
      this._buttonElement.disabled = false;
    }
  }

  // La función toma un array formado por campos
  _hasInvalidInput(inputElement) {
    // itera sobre el array utilizando el método some()
    return this._inputList.some((inputElement) => {
      // Si el campo no es válido, el callback devolverá true.
      // El método se detendrá entonces, y la función hasInvalidInput() devolverá true
      // hasInvalidInput devuelve true
      return !inputElement.validity.valid;
    });
  }
}

export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método público que renderiza todos los elementos
  renderItems() {
    this._items.forEach(item => {
      const element = this._renderer(item); // Crea cada elemento
      this._container.append(element); // Lo agrega al contenedor
    });
  }

  // Método para agregar UN elemento individual
  addItem(item) {
    this._container.prepend(item);
  }
}


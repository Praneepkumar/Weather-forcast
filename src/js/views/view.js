export default class View {
  _data;
  _clear() {
    this._parentElement.innerHTML = "";
  }
  render(data) {
    this._data = data;
    let markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderSpinner() {
    let markup = `<div class="spinner">
        <img src="../src/img/icon.svg" />
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  addHandlerRender(handler) {
    /*   window.addEventListener("load", async () => await handler()); */
    window.addEventListener("load", handler);
  }
}

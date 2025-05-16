import { createElement } from '../framework/render.js';

export default class FilmListComponent {
  constructor() {
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `<ul class="film-list"></ul>`;
    return createElement(template);
  }
}

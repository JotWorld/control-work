import { createElement } from '../framework/render.js';

export default class FilmListH2Component {
  constructor() {
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `
      <div>
        <h2>Список Фильмов</h2>
      </div>
    `;
    return createElement(template);
  }
}

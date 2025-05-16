import { createElement } from '../framework/render.js';

export default class FilmListComponent {
  constructor() {
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `<ul class="movie-list">
    <h2>Список Фильмов</h2>
    </ul>`;
    return createElement(template);
  }
}

import { createElement } from '../framework/render.js';

export default class FilmComponent {
  constructor(film) {
    this.film = film;
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `
      <li class="film-item">
        <span class="film-title">${this.film.title}</span>
        <span class="film-status">${this.film.watched ? 'Просмотрен' : 'Не просмотрен'}</span>
      </li>
    `;
    return createElement(template);
  }
}

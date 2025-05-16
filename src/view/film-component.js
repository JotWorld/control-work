import { createElement } from '../framework/render.js';

export default class FilmComponent {
  constructor(film, onDelete) {
    this.film = film;
    this.onDelete = onDelete;
    this.element = this.#createElement();
    this.#setHandlers();
  }

  #createElement() {
    const template = `
      <li class="film-item" data-id="${this.film.id}">
        <span class="film-title">${this.film.title}</span>
        <span class="film-status">${this.film.watched ? 'Просмотрен' : 'Не просмотрен'}</span>
        <button class="film-delete-btn">Удалить</button>
      </li>
    `;
    return createElement(template);
  }

  #setHandlers() {
    this.element.querySelector('.film-delete-btn').addEventListener('click', () => {
      this.onDelete?.(this.film.id);
    });
  }
}

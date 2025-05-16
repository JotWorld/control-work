import { createElement } from '../framework/render.js';

export default class FilmComponent {
  constructor(film, { onDelete, onEdit, onToggleWatched }) {
    this.film = film;
    this.onDelete = onDelete;
    this.onEdit = onEdit;
    this.onToggleWatched = onToggleWatched;

    this.element = this.#createElement();
    this.#setHandlers();
  }

  #createElement() {
    const template = `
      <div class="film-item" data-id="${this.film.id}">
        <span class="film-title">${this.film.title}</span>
        <span class="film-status">${this.film.watched ? 'Просмотрен' : 'Не просмотрен'}</span>
        <button class="film-toggle-btn">${this.film.watched ? 'Отметить как не просмотрен' : 'Отметить как просмотрен'}</button>
        <button class="film-edit-btn">Редактировать</button>
        <button class="film-delete-btn">Удалить</button>
      </div>
    `;
    return createElement(template);
  }

  #setHandlers() {
    this.element.querySelector('.film-delete-btn')
      .addEventListener('click', () => this.onDelete(this.film.id));

    this.element.querySelector('.film-edit-btn')
      .addEventListener('click', () => this.onEdit(this.film));

    this.element.querySelector('.film-toggle-btn')
      .addEventListener('click', () =>
        this.onToggleWatched(this.film.id, !this.film.watched)
      );
  }
}

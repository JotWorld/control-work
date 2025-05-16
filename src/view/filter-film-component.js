import { createElement } from '../framework/render.js';

export default class FilterMovieComponent {
  constructor({ onChange }) {
    this.element = this.#createElement();
    this.#setEventHandlers(onChange);
  }

  #createElement() {
    const template = `
      <div class="movie-filter">
        <h2>Фильтры</h2>

        <fieldset>
          <legend>Статус:</legend>
          <label><input type="radio" name="status-filter" value="all" checked /> Все</label>
          <label><input type="radio" name="status-filter" value="watched" /> Просмотренные</label>
          <label><input type="radio" name="status-filter" value="unwatched" /> Непросмотренные</label>
        </fieldset>

        <label>
          <input type="checkbox" id="favorite-filter" />
          Показывать только избранное
        </label>
      </div>
    `;
    return createElement(template);
  }

  #setEventHandlers(callback) {
    if (!callback) return;

    const statusRadios = this.element.querySelectorAll('input[name="status-filter"]');
    const favoriteCheckbox = this.element.querySelector('#favorite-filter');

    statusRadios.forEach(radio =>
      radio.addEventListener('change', () => callback(this.getFilters()))
    );

    favoriteCheckbox.addEventListener('change', () =>
      callback(this.getFilters())
    );
  }

  getFilters() {
    const status = this.element.querySelector('input[name="status-filter"]:checked').value;
    const favoriteOnly = this.element.querySelector('#favorite-filter').checked;

    return {
      status,
      favoriteOnly
    };
  }
}

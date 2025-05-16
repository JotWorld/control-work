import { createElement } from '../framework/render.js';

export default class FilterMovieComponent {
  constructor() {
    this.element = this.#createElement();
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
}
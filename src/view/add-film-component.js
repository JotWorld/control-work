import { createElement } from '../framework/render.js';

export default class AddFilmComponent {
  constructor() {
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `
    <div>
        <h1>Коллекция Фильмов</h1>

        <section>
          <p>Используйте эту коллекцию для отслеживания фильмов, которые вы посмотрели или хотите посмотреть. Отмечайте фильмы как просмотренные и фильтруйте по статусу.</p>
        </section>

        <div class="movie-form">
          <h2>Добавить Фильм</h2>
          <form id="movie-form">
            <label for="movie-title">Название фильма:</label>
            <input type="text" id="movie-title" placeholder="Например, Начало" required />

            <div class="watched-toggle">
              <label for="movie-status">Отметить как просмотренный:</label>
              <label class="switch">
                <input type="checkbox" id="movie-status">
                <span class="slider"></span>
              </label>
            </div>

            <button type="submit">Добавить Фильм</button>
          </form>
        </div>
    </div>
    `;
    return createElement(template);
  }
}

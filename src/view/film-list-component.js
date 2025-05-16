import { createElement } from '../framework/render.js';

export default class FilmListComponent {
  constructor() {
    this.element = this.#createElement();
  }

  #createElement() {
    const template = `
    <div class="movie-list">
        
        <div id="movie-list" class="card-container"></div>
      </div>`;
    return createElement(template);
  }
}

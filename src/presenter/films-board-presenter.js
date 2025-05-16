import FilmComponent from '../view/film-component.js';
import { createElement, render } from '../framework/render.js';
import FilmListComponent from '../view/film-list-component.js';

export default class FilmsBoardPresenter {
  #boardContainer = null;
  #filmsModel = null;


  constructor({ boardContainer, filmsModel }) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
  }

  init() {
    const filmListComponent = new FilmListComponent();

    render(filmListComponent, this.#boardContainer);

    const films = this.#filmsModel.films;

    for (const film of films) {
      const filmComponent = new FilmComponent(film);
      render(filmComponent, filmListComponent.element);
    }
  }
}

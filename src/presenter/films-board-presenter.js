import FilmComponent from '../view/film-component.js';
import { render } from '../framework/render.js';
import FilmListComponent from '../view/film-list-component.js';

export default class FilmsBoardPresenter {
  #boardContainer = null;
  #filmsModel = null;
  #filmListComponent = null;

  constructor({ boardContainer, filmsModel }) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
    this.#filmsModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    this.#filmListComponent = new FilmListComponent();
    render(this.#filmListComponent, this.#boardContainer);
    this.#renderFilms();
    this.#setupAddFilmForm();
  }

  #renderFilms() {
    this.#filmListComponent.element.innerHTML = '';
    const films = this.#filmsModel.films;

    for (const film of films) {
      const filmComponent = new FilmComponent(film, this.#handleDelete.bind(this));
      render(filmComponent, this.#filmListComponent.element);
    }
  }

#handleModelChange() {
  this.#filmListComponent.element.innerHTML = ''; 
  this.#renderFilms();
}


  #handleDelete(id) {
    this.#filmsModel.deleteFilmById(id);
  }

  #setupAddFilmForm() {
    const form = document.querySelector('#movie-form');
    const titleInput = document.querySelector('#movie-title');
    const statusCheckbox = document.querySelector('#movie-status');

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const title = titleInput.value.trim();
      const watched = statusCheckbox.checked;
      if (title) {
        this.#filmsModel.addFilm(title, watched);
        form.reset();
      }
    });
  }
}

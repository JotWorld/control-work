import FilmComponent from '../view/film-component.js';
import { render } from '../framework/render.js';
import FilmListComponent from '../view/film-list-component.js';
import FilterMovieComponent from '../view/filter-film-component.js';
import FilmListH2Component from '../view/film-list-h2-component.js';



  


export default class FilmsBoardPresenter {
  #boardContainer = null;
  #filterComponent = null;

  #filmsModel = null;
  #filmListComponent = null;
  #currentFilter = 'all';

  constructor({ boardContainer, filmsModel }) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
    this.#filmsModel.addObserver(this.#handleModelChange.bind(this));
  }

init() {
  this.#filterComponent = new FilterMovieComponent({
    onChange: (filters) => {
      this.#setFilter(filters.status);
    }
  });

  render(this.#filterComponent, this.#boardContainer);
  this.#filmListComponent = new FilmListComponent();
  const h2Component = new FilmListH2Component();
  render(h2Component, this.#boardContainer); 

  render(this.#filmListComponent, this.#boardContainer);
  this.#renderFilms();
  this.#setupAddFilmForm();
}


#renderFilms() {
  this.#filmListComponent.element.innerHTML = '';
  const films = this.#getFilteredFilms();

  for (const film of films) {
    const filmComponent = new FilmComponent(film, {
      onDelete: this.#handleDelete.bind(this),
      onEdit: this.#handleEdit.bind(this),
      onToggleWatched: this.#handleToggleWatched.bind(this),
    });
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
  #handleToggleWatched(id, newWatched) {
  this.#filmsModel.updateFilm(id, { watched: newWatched });
}

#handleEdit(film) {
  const newTitle = prompt('Новое название фильма:', film.title);
  if (newTitle !== null && newTitle.trim()) {
    this.#filmsModel.updateFilm(film.id, { title: newTitle.trim() });
  }
}
#setFilter(status) {
  this.#currentFilter = status;
  this.#renderFilms();
}
#getFilteredFilms() {
  const allFilms = this.#filmsModel.films;
  switch (this.#currentFilter) {
    case 'watched':
      return allFilms.filter(f => f.watched);
    case 'unwatched':
      return allFilms.filter(f => !f.watched);
    default:
      return allFilms;
  }
}

}

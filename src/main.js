import FilmsModel from './model/films-model.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';
import AddFilmComponent from './view/add-film-component.js';
import { render } from './framework/render.js';
import FilterMovieComponent from './view/filter-film-component.js';
const filmsModel = new FilmsModel();

const boardElement = document.querySelector('.container');

const filmsBoardPresenter = new FilmsBoardPresenter({
  boardContainer: boardElement,
  filmsModel: filmsModel,
});
const addFilmComponent = new AddFilmComponent();
const filterFilmComponent = new FilterMovieComponent();

render(addFilmComponent, boardElement, 'afterbegin');
render(filterFilmComponent,boardElement);
filmsBoardPresenter.init();

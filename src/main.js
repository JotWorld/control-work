import FilmsModel from './model/films-model.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';
import AddFilmComponent from './view/add-film-component.js';
import { render } from './framework/render.js';

const filmsModel = new FilmsModel();
const boardElement = document.querySelector('.container');

const addFilmComponent = new AddFilmComponent();
render(addFilmComponent, boardElement, 'afterbegin');

const filmsBoardPresenter = new FilmsBoardPresenter({
  boardContainer: boardElement,
  filmsModel: filmsModel,
});
filmsBoardPresenter.init();

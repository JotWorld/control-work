export default class FilmsModel {
  #films = [
    { id: '1', title: 'Inception', watched: true },
    { id: '2', title: 'The Matrix', watched: false },
    { id: '3', title: 'Interstellar', watched: true },
    { id: '4', title: 'BB', watched: true }
  ];

  #observers = new Set();

  get films() {
    return this.#films;
  }

  addFilm(title, watched) {
    const newFilm = {
      id: String(Date.now()),
      title,
      watched
    };
    this.#films.push(newFilm);
    this.#notify();
  }

  deleteFilmById(id) {
    this.#films = this.#films.filter(film => film.id !== id);
    this.#notify();
  }

  addObserver(observer) {
    this.#observers.add(observer);
  }

  removeObserver(observer) {
    this.#observers.delete(observer);
  }

  #notify() {
    this.#observers.forEach((observer) => observer());
  }
}

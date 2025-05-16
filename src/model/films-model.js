export default class FilmsModel {
  #films = [
    { id: '1', title: 'Inception', watched: true },
    { id: '2', title: 'The Matrix', watched: false },
    { id: '3', title: 'Interstellar', watched: true },
    { id: '4', title: 'BB', watched: true }
  ];

  get films() {
    return this.#films;
  }
  
}

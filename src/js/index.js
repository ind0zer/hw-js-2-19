import { initAddForm } from './actions/addMovie.js';
import { initDeleteHandlers } from './actions/deleteMovie.js';
import { initEditHandlers } from './actions/editMovie.js';
import { renderMovies } from './actions/renderMovie.js';

document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  initAddForm();
  initDeleteHandlers();
  initEditHandlers();
});
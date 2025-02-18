import { addItem } from '../api/addMovie.js';
import { renderMovies } from './renderMovie.js';

export function initAddForm() {
  document.getElementById('add-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    if (!title || !year || !genre) {
      console.log('Заповніть всі поля!', 'error');
      return;
    }

    try {
      await addItem({
        title,
        year: parseInt(year),
        genre,
        createdAt: new Date().toISOString()
      });
      
      document.getElementById('title').value = '';
      document.getElementById('year').value = '';
      document.getElementById('genre').value = '';
      
      await renderMovies();
      console.log(`Фільм "${title}" успішно доданий!`);
    } catch (error) {
      console.log(error.message, 'error');
    }
  });
}
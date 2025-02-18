import { deleteItem } from '../api/deleteMovie';

export const initDeleteHandlers = () => {
  document.getElementById('movies-container').addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const card = e.target.closest('.movie-card');
      const id = card.dataset.id;
      
      try {
        await deleteItem(id);
        card.remove();
        console.log(`Фільм ID: ${id} видалений!`);
      } catch (error) {
        console.log(error.message, 'error');
      }
    }
  });
};
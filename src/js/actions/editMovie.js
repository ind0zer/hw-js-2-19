import { editItem } from '../api/editMovie';

let currentMovieId = null;

export const initEditHandlers = () => {
  const modal = document.getElementById('edit-modal');
  const closeBtn = document.querySelector('.close');
  
  document.getElementById('movies-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
      const card = e.target.closest('.movie-card');
      currentMovieId = card.dataset.id;
      
      document.getElementById('edit-title').value = card.querySelector('h3').textContent.split(' (')[0];
      document.getElementById('edit-year').value = card.querySelector('h3').textContent.match(/\((\d+)\)/)[1];
      document.getElementById('edit-genre').value = card.querySelector('p').textContent.replace('Жанр: ', '');
      
      modal.style.display = 'block';
    }
  });

  closeBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (e) => e.target === modal ? modal.style.display = 'none' : null;

  document.getElementById('save-changes').addEventListener('click', async () => {
    const newTitle = document.getElementById('edit-title').value;
    const newYear = document.getElementById('edit-year').value;
    const newGenre = document.getElementById('edit-genre').value;

    if (!newTitle || !newYear || !newGenre) {
      console.log('Заповніть всі поля!', 'error');
      return;
    }

    try {
      await editItem(currentMovieId, {
        title: newTitle,
        year: parseInt(newYear),
        genre: newGenre
      });
      
      const card = document.querySelector(`.movie-card[data-id="${currentMovieId}"]`);
      card.querySelector('h3').textContent = `${newTitle} (${newYear})`;
      card.querySelector('p').textContent = `Жанр: ${newGenre}`;
      
      modal.style.display = 'none';
      console.log('Фільм успішнго оновленний!');
    } catch (error) {
      console.log(error.message, 'error');
    }
  });
};
export const getMovies = async () => {
    const response = await fetch('https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie');
    if (!response.ok) throw new Error('Помилка завантаження даних');
    return response.json();
  };


export const renderMovies = async () => {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';
    
    try {
      const movies = await getMovies();
      
      movies.forEach(movie => {
        const card = `
          <div class="movie-card" data-id="${movie.id}">
            <h3>${movie.title} (${movie.year})</h3>
            <p>Жанр: ${movie.genre}</p>
            <div class="card-actions">
              <button class="edit-btn">Змінити</button>
              <button class="delete-btn">Видалити</button>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
      });
    } catch (error) {
      console.log(error.message, 'error');
    }
  };
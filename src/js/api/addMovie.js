export const addItem = async (movieData) => {
    const response = await fetch('https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...movieData,
        createdAt: new Date().toISOString()
      })
    });
    
    if (!response.ok) throw new Error('Помилка додавання: ' + response.statusText);
    return response.json();
  };
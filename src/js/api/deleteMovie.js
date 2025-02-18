export const deleteItem = async (id) => {
    const response = await fetch(`https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie/${id}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) throw new Error('Помилка видалення');
    return response.json();
  };
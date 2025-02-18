export const editItem = async (id, updatedData) => {
    const response = await fetch(`https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData)
    });
    
    if (!response.ok) throw new Error('Помилка редагування: ' + response.statusText);
    return response.json();
  };
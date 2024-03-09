import { createAsyncThunk } from '@reduxjs/toolkit';

export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error('Ошибка при добавлении пользователя');
  }
  const data = await response.json();
  return data;
});

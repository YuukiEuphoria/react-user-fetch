import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Ошибка при удалении пользователя');
  }
  return userId;
});

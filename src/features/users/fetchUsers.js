import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:3000/users');
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return response.data;
});

//json-server --watch db.json -p 3000
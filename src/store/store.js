import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/UserSlice.js'
import { deleteUser } from '../features/deleteUser/deleteUser.js';
export const store = configureStore({
  reducer: {
    users: userReducer,

  },
});


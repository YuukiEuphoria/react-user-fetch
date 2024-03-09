import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/UserSlice.js'
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

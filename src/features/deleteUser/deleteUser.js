import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    return userId;
  }
);

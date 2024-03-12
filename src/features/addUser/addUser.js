import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response.data;
});

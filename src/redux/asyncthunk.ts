import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productsApi } from "../utils/constants";

export const fetchHomeProducts = createAsyncThunk("products", async () => {
  try {
    const res = await axios.get(productsApi);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

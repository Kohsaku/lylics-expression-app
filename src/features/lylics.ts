import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const lylicsSlice = createSlice({
  name: "lylics",
  initialState: {
    lylics: {
      uid: "",
      date: "",
      disclose: false,
      process: false,
      like: 0,
      song: "",
      artist: "",
      japanese: "",
      English: "",
    },
  },
  reducers: {},
});

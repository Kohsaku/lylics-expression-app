import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const lylicsSlice = createSlice({
  name: "lylics",
  initialState: {
    lylics: {
      uid: "",
      translater: "",
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
  reducers: {
    like: (state) => {
      state.lylics.like += 1;
    },
    unLike: (state) => {
      state.lylics.like -= 1;
    },
    currentFeed: (state, action) => {
      state.lylics = action.payload;
    },
  },
});

export const { currentFeed } = lylicsSlice.actions;

export const selectLylics = (state: RootState) => state.lylics.lylics;

export default lylicsSlice.reducer;

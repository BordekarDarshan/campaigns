import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: {
    range: [],
    name: "",
  },
};

export const searchQuerySlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.searchQuery[action.payload.id] = action.payload.data;
    },
  },
});

export const { addQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;

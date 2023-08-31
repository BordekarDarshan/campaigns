import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { campaignsList } from "../../utils/campaignslist";
import { fetchUsersApi } from "../../utils/apicalls";
import { dataMapping } from "../../utils/helper";

const initialState = {
  campaignsList,
  isLoading: false,
  isError: false,
};

// Action
export const fetchUsers = createAsyncThunk("fetchUsers", fetchUsersApi);

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.campaignsList = dataMapping(state.campaignsList, action.payload);
    });
  },
});

export const {} = campaignSlice.actions;

export default campaignSlice.reducer;

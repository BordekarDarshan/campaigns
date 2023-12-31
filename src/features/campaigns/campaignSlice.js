import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { campaignsList } from "../../utils/campaignslist";
import { fetchUsersApi } from "../../utils/apicalls";
import { dataMapping, userDataKeyValueMapping } from "../../utils/helper";

const initialState = {
  campaignsList,
  isLoading: false,
  isError: false,
  userList: {},
};

// Action
export const fetchUsers = createAsyncThunk("fetchUsers", fetchUsersApi);

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    addCampaign: (state, action) => {
      let newCampaign = action.payload.data;
      newCampaign.id = nanoid();
      state.campaignsList.push(newCampaign);
    },
  },
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
      state.userList = userDataKeyValueMapping(action.payload);
    });
  },
});

export const { addCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { campaignsList } from "../../utils/campaignslist";

const initialState = {
  campaignsList,
};

export const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
});

export const {} = campaignSlice.actions;

export default campaignSlice.reducer;

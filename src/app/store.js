import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "../features/campaigns/campaignSlice";
import searchReducer from "../features/campaigns/searchSlice";

export const store = configureStore({
  reducer: { campaignsReducer, searchReducer },
});

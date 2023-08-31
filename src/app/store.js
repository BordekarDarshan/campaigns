import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "../features/campaigns/campaignSlice";

export const store = configureStore({
  reducer: { campaignsReducer },
});

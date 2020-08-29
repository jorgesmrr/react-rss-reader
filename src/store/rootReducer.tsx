import { combineReducers } from "@reduxjs/toolkit";
import feedsReducer from "./slices/feedsSlice";

const rootReducer = combineReducers({
  feeds: feedsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

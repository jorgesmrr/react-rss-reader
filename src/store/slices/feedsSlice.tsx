import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "../../models/Feed";
import { fetchFeed } from "../../api/feedAPI";
import { AppThunk } from "../store";

interface SelectedFeed {
  id: number;
}

interface AddFeed {
  url: string;
}

interface FeedsState {
  feeds: Array<Feed>;
  selectedId?: number;
}

let initialState: FeedsState = {
  feeds: [],
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    refreshFeeds(state) {
      state.feeds = [];
    },
    addFeedSuccess(state, action: PayloadAction<Feed>) {
      state.feeds.unshift(action.payload);
    },
    addFeedFailure() {
      // todo
    },
  },
});

export const { refreshFeeds } = feedsSlice.actions;
const { addFeedSuccess, addFeedFailure } = feedsSlice.actions;

export default feedsSlice.reducer;

export const addFeed = (url: string): AppThunk => async (dispatch) => {
  try {
    const feed = await fetchFeed(url);
    dispatch(addFeedSuccess(feed));
  } catch (err) {
    dispatch(addFeedFailure());
  }
};

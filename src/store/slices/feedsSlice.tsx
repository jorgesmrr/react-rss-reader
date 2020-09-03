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
  selectedId: undefined,
};

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<SelectedFeed>) {
      state.selectedId = action.payload.id;
    },
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

export const { setSelected, refreshFeeds } = feedsSlice.actions;
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

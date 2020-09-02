import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "../../models/Feed";
import { feedMockFactory } from "../../utils/mocks";

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
    addFeed(state, action: PayloadAction<AddFeed>) {
      state.feeds.unshift({
        ...feedMockFactory.one(),
        url: action.payload.url,
      });
    },
  },
});

export const { setSelected, refreshFeeds, addFeed } = feedsSlice.actions;

export default feedsSlice.reducer;

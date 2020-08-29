import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "../../models/Feed";
import { feedMockFactory } from "../../utils/mocks";

interface SelectedFeed {
  id: number;
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
      state.feeds = feedMockFactory.many(10);
    },
  },
});

export const { setSelected, refreshFeeds } = feedsSlice.actions;

export default feedsSlice.reducer;

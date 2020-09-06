import { RootState } from "./rootReducer";

export const feedById = (id: number) => (state: RootState) =>
  state.feeds.feeds.find((f) => f.id === id);

export const postById = (channelId: number, postId: number) => (
  state: RootState
) => feedById(channelId)(state)?.posts.find((p) => p.id === postId);

import React from "react";
import PostList from "../../post/list/PostList";
import { Feed } from "../../../models/Feed";

export interface FeedDetailProps {
  feed: Feed;
  onPostClick: (id: number) => void;
}

const FeedDetail: React.FC<FeedDetailProps> = ({ feed, onPostClick }) => {
  return (
    <div>
      <h1>{feed.title}</h1>
      <PostList posts={feed.posts} onPostClick={onPostClick} />
    </div>
  );
};

export default FeedDetail;

import React from "react";
import PostList from "../../post/list/PostList";
import { Feed } from "../../../models/Feed";

export interface FeedDetailProps {
  feed: Feed;
}

const FeedDetail: React.FC<FeedDetailProps> = ({ feed }) => {
  const onPostClick = () => {};
  return (
    <div>
      <h1>{feed.title}</h1>
      <PostList posts={feed.posts} onPostClick={onPostClick} />
    </div>
  );
};

export default FeedDetail;

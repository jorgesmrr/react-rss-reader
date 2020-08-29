import React from "react";
import FeedListItem from "../list-item/FeedListItem";
import { Feed } from "../../../models/Feed";

export interface FeedListProps {
  feeds: Array<Feed>;
  selectedId: number;
}

const FeedList: React.FC<FeedListProps> = ({ feeds, selectedId }) => {
  return (
    <div>
      {feeds.map((feed) => (
        <FeedListItem selected={feed.id === selectedId} feed={feed} />
      ))}
    </div>
  );
};

export default FeedList;

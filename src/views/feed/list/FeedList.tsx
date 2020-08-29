import React from "react";
import FeedListItem from "../list-item/FeedListItem";
import { Feed } from "../../../models/Feed";

export interface FeedListProps {
  feeds: Array<Feed>;
  selectedId?: number;
  onFeedClick: (id: number) => void;
}

const FeedList: React.FC<FeedListProps> = ({
  feeds,
  selectedId,
  onFeedClick,
}) => {
  return (
    <div>
      {feeds.map((feed) => (
        <FeedListItem
          selected={feed.id === selectedId}
          feed={feed}
          onClick={() => onFeedClick(feed.id)}
        />
      ))}
    </div>
  );
};

export default FeedList;

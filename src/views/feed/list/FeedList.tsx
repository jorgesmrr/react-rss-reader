import React from "react";
import FeedListItem from "../list-item/FeedListItem";
import { Feed } from "../../../models/Feed";

export interface FeedListProps {
  feeds: Array<Feed>;
  selectedId?: number;
  onItemClick: (id: number) => void;
}

const FeedList: React.FC<FeedListProps> = ({
  feeds,
  selectedId,
  onItemClick,
}) => {
  return (
    <div>
      {feeds.map((feed) => (
        <FeedListItem
          selected={feed.id === selectedId}
          feed={feed}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default FeedList;

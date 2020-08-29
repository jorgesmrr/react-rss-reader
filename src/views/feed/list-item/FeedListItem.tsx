import React from "react";
import { Feed } from "../../../models/Feed";

export interface FeedListItemProps {
  feed: Feed;
  selected: boolean;
  onItemClick: (id: number) => void;
}

const FeedListItem: React.FC<FeedListItemProps> = ({
  feed,
  selected,
  onItemClick,
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-neutral-3 p-2 hover:text-white ${
        selected ? "bg-neutral-3" : ""
      }`}
      onClick={() => onItemClick(feed.id)}
    >
      <div className="rounded bg-neutral-7 w-8 h-8 mr-4"></div>
      <div>{feed.title}</div>
    </div>
  );
};

export default FeedListItem;

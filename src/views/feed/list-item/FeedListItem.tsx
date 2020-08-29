import React from "react";
import { Feed } from "../../../models/Feed";

export interface FeedListItemProps {
  feed: Feed;
  selected: boolean;
}

const FeedLListItem: React.FC<FeedListItemProps> = ({ feed, selected }) => {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-neutral-7 p-2 hover:text-white ${
        selected ? "bg-neutral-1" : ""
      }`}
    >
      <div className="rounded bg-neutral-2 w-8 h-8 mr-4"></div>
      <div>{feed.title}</div>
    </div>
  );
};

export default FeedLListItem;

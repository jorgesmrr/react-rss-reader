import React from "react";
import { Feed } from "../../../models/Feed";

export interface FeedListItemProps {
  feed: Feed;
  selected: boolean;
  onClick: () => void;
}

const FeedListItem: React.FC<FeedListItemProps> = ({
  feed,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-neutral-3 py-2 px-4 ${
        selected ? "bg-neutral-3" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="rounded bg-neutral-7 w-8 h-8 mr-4"></div>
      <div className={selected ? "font-bold" : ""}>{feed.title}</div>
    </div>
  );
};

export default FeedListItem;

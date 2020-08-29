import React from "react";
import FeedList, { FeedListProps } from "../feed/list/FeedList";

interface SudebarProps extends FeedListProps {}

const Sidebar: React.FC<SudebarProps> = ({
  feeds,
  selectedId,
  onFeedClick: onItemClick,
}) => {
  return (
    <div className="bg-neutral-2">
      <span className="block uppercase text-sm text-neutral-8 font-bold my-6 px-4">
        Subscriptions
      </span>
      <FeedList
        selectedId={selectedId}
        feeds={feeds}
        onFeedClick={onItemClick}
      />
    </div>
  );
};

export default Sidebar;

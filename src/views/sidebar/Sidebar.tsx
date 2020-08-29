import React from "react";
import FeedList, { FeedListProps } from "../feed/list/FeedList";

interface SudebarProps extends FeedListProps {}

const Sidebar: React.FC<SudebarProps> = ({
  feeds,
  selectedId,
  onItemClick,
}) => {
  return (
    <div className="bg-neutral-2">
      <FeedList
        selectedId={selectedId}
        feeds={feeds}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default Sidebar;

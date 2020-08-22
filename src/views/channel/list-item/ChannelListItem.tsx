import React from "react";
import { Channel } from "../../../models/Channel";

export interface ChannelListItemProps {
  channel: Channel;
  selected: boolean;
}

const ChannelLListItem: React.FC<ChannelListItemProps> = ({
  channel,
  selected,
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-neutral-7 p-2 hover:text-white ${
        selected ? "bg-neutral-1" : ""
      }`}
    >
      <div className="rounded bg-neutral-2 w-8 h-8 mr-4"></div>
      <div>{channel.title}</div>
    </div>
  );
};

export default ChannelLListItem;

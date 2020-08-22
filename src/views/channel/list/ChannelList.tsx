import React from "react";
import ChannelListItem from "../list-item/ChannelListItem";
import { Channel } from "../../../models/Channel";

export interface ChannelListProps {
  channels: Array<Channel>;
  selectedId: number;
}

const ChannelList: React.FC<ChannelListProps> = ({ channels, selectedId }) => {
  return (
    <div>
      {channels.map((channel) => (
        <ChannelListItem
          selected={channel.id === selectedId}
          channel={channel}
        />
      ))}
    </div>
  );
};

export default ChannelList;

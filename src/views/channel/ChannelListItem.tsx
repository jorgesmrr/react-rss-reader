import React from "react";

export interface ChannelListItemProps {
  title: string;
  icon?: string;
}

class ChannelLListItem extends React.Component<ChannelListItemProps> {
  render() {
    return (
      <div className="flex items-center">
        <div className="rounded bg-neutral-1 w-8 h-8 mr-4"></div>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default ChannelLListItem;

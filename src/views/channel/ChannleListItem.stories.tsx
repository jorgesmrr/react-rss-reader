import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ChannelListItem, { ChannelListItemProps } from "./ChannelListItem";

export default {
  title: "Channel/ChannelListItem",
  component: ChannelListItem,
};

const Template: Story<ChannelListItemProps> = (args) => (
  <ChannelListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { title: "Channel title" };

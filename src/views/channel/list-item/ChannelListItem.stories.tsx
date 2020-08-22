import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ChannelListItem, { ChannelListItemProps } from "./ChannelListItem";
import { channelMockFactory } from "../../../utils/mocks";

export default {
  title: "Channel/ChannelListItem",
  component: ChannelListItem,
};

const Template: Story<ChannelListItemProps> = (args) => (
  <ChannelListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { channel: channelMockFactory.one() };

export const Selected = Template.bind({});
Selected.args = { ...Default.args, selected: true };

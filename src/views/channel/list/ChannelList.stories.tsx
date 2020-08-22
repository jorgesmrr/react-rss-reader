import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ChannelList, { ChannelListProps } from "./ChannelList";
import { channelMockFactory } from "../../../utils/mocks";

export default {
  title: "Channel/ChannelList",
  component: ChannelList,
};

const Template: Story<ChannelListProps> = (args) => <ChannelList {...args} />;

export const Default = Template.bind({});
Default.args = { channels: channelMockFactory.many(10) };

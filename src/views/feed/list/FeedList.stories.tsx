import React from "react";
import { Story } from "@storybook/react/types-6-0";
import FeedList, { FeedListProps } from "./FeedList";
import { feedMockFactory } from "../../../utils/mocks";

export default {
  title: "Feed/FeedList",
  component: FeedList,
};

const Template: Story<FeedListProps> = (args) => <FeedList {...args} />;

export const Default = Template.bind({});
Default.args = { feeds: feedMockFactory.many(10) };

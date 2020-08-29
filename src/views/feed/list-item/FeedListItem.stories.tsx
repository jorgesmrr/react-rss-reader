import React from "react";
import { Story } from "@storybook/react/types-6-0";
import FeedListItem, { FeedListItemProps } from "./FeedListItem";
import { feedMockFactory } from "../../../utils/mocks";

export default {
  title: "Feed/FeedListItem",
  component: FeedListItem,
};

const Template: Story<FeedListItemProps> = (args) => <FeedListItem {...args} />;

export const Default = Template.bind({});
Default.args = { feed: feedMockFactory.one() };

export const Selected = Template.bind({});
Selected.args = { ...Default.args, selected: true };

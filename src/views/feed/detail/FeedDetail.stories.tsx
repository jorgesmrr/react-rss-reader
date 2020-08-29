import React from "react";
import { Story } from "@storybook/react/types-6-0";
import FeedDetail, { FeedDetailProps } from "./FeedDetail";
import { feedMockFactory } from "../../../utils/mocks";

export default {
  title: "Feed/FeedDetail",
  component: FeedDetail,
};

const Template: Story<FeedDetailProps> = (args) => <FeedDetail {...args} />;

export const Default = Template.bind({});
Default.args = { feed: feedMockFactory.one() };

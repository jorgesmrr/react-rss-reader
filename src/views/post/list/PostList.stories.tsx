import React from "react";
import { Story } from "@storybook/react/types-6-0";
import FeedList, { PostListProps } from "./PostList";
import { postMockFactory } from "../../../utils/mocks";
import PostList from "./PostList";

export default {
  title: "Post/PostList",
  component: FeedList,
};

const Template: Story<PostListProps> = (args) => <PostList {...args} />;

export const Default = Template.bind({});
Default.args = { posts: postMockFactory.many(10) };

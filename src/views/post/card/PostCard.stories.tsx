import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PostCard, { PostCardProps } from "./PostCard";
import { postMockFactory } from "../../../utils/mocks";

export default {
  title: "Post/PostCard",
  component: PostCard,
};

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  post: postMockFactory.one(),
};

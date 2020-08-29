import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Main, { MainProps } from "./Main";
import { feedMockFactory } from "../../utils/mocks";

export default {
  title: "App/Main",
  component: Main,
};

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Empty = Template.bind({});

export const Default = Template.bind({});
Default.args = { currentFeed: feedMockFactory.one() };

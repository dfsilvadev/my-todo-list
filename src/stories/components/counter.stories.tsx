import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "@/components";

export default {
  title: "Components/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "3"
};

export const Other = Template.bind({});
Other.args = {
  value: "2 de 5"
};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@/components";

export default {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "primary"
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search"
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Search",
  error: true
};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "@/components";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "select" }
    },
    onCheck: { action: "check" }
  },
  args: {
    labelColor: "white",
    name: "Categorias",
    label: "Ação",
    labelFor: "action"
  },
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  isChecked: false
};

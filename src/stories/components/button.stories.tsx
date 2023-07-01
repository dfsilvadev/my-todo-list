import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlusCircle } from "phosphor-react";

import { Button } from "@/components";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Criar",
    icon: <PlusCircle size={20} weight="bold" data-testid="icon" />
  },
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

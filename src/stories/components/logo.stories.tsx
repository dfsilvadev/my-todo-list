import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "@/components";

import logoSVG from "@assets/logo.svg";

export default {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: logoSVG,
  title: "Logo Todo App",
  alt: "Logo Todo App",
  "aria-label": "logo"
};

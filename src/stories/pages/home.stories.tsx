import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomePage } from "@/pages";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
  argTypes: {}
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

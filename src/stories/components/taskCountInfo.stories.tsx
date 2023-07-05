import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter, TaskCountInfo } from "@/components";

export default {
  title: "Components/TaskCountInfo",
  component: TaskCountInfo,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof TaskCountInfo>;

const Template: ComponentStory<typeof TaskCountInfo> = (args) => (
  <TaskCountInfo {...args} />
);

export const Created = Template.bind({});
Created.args = {
  children: "Tarefas criadas",
  variant: "created",
  badge: <Counter value="5" />
};

export const Done = Template.bind({});
Done.args = {
  children: "Concluídas",
  variant: "done",
  badge: <Counter value="2 de 5" />
};

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container, TaskList } from "@/components";

import { tasks } from "@/mocks/tasks";

export default {
  title: "Components/TaskList",
  component: TaskList,
  tags: ["autodocs"],
  argTypes: {}
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <Container>
    <TaskList {...args} />
  </Container>
);

export const List = Template.bind({});
List.args = {
  tasks
};

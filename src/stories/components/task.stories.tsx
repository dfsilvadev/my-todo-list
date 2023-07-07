import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container, Task } from "@/components";

export default {
  title: "Components/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {}
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => (
  <div
    style={{
      padding: "1rem 0"
    }}
  >
    <Container>
      <Task {...args} />
    </Container>
  </div>
);

export const Created = Template.bind({});
Created.args = {
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure soluta alias reprehenderit laboriosam quia modi ratione laudantium assumenda incidunt dolor ipsam, aliquid architecto sed amet eum voluptatum aut optio.",
  status: "created"
};

export const Done = Template.bind({});
Done.args = {
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure soluta alias reprehenderit laboriosam quia modi ratione laudantium assumenda incidunt dolor ipsam, aliquid architecto sed amet eum voluptatum aut optio.",
  status: "done"
};

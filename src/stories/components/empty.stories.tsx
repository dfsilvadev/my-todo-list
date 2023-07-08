import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container, Empty } from "@/components";

export default {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {}
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = () => (
  <div
    style={{
      padding: "2.5rem"
    }}
  >
    <Container>
      <Empty />
    </Container>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

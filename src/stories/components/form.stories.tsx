import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container, Form } from "@/components";

export default {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {}
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Container>
    <Form />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

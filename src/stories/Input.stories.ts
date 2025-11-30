import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: { control: "radio" },
    clearable: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    clearable: false,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    clearable: false,
  },
};

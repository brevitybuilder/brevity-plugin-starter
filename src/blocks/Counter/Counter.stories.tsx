import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from ".";

const meta: Meta<typeof Counter> = {
  title: "Example/Button",
  component: Counter,
};

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  render: () => <Counter />,
};

export default meta;

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppShell } from ".";

export default {
  title: "AppShell",
  component: AppShell,
} as ComponentMeta<typeof AppShell>;

const Template: ComponentStory<typeof AppShell> = (args) => (
  <AppShell
    {...args}
    routes={[
      {
        path: "/",
        element: () => <div>Home</div>,
      },
    ]}
    navLinks={[
      {
        label: "Home",
        path: "/",
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "My App",
};

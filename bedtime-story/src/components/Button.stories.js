import Button from "./Button";

// This determines where this story goes in the story list
export default {
  title: "Components/Button", // The title prop is optional
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

// Create a template of how args map to rendering
const Template = (args) => <Button {...args} />;

/**
 * A technique for making a copy of a function, i.e., Template. You use
 * this technique to allow each exported story to set it own properties,
 * but use the same implementation
 */
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "#ff0000",
  textContent: "Click Me!",
  size: "sm",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "#00ff00",
  textContent: "Click Me!",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "#0000ff",
  textContent: "Click Me!",
  size: "lg",
};

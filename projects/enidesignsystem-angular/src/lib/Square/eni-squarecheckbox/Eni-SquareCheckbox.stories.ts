import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniSquarecheckboxComponent } from './eni-squarecheckbox.component';

export default {
  component: EniSquarecheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniSquarecheckboxComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Square/Checkbox/EniSquareCheckbox",
} as Meta;

const Template: Story<EniSquarecheckboxComponent> = (args: EniSquarecheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
 value: false,
 icon: require("../../styles/assets/images/refused.svg"),
 disabled: false,
  required:true,
  name : "test",
};
export const Disabled = Template.bind({});
Disabled.args = {
  value: true,
  icon: require("../../styles/assets/images/refused.svg"),
  disabled: true,
   required:true,
   name : "test",
 };
 
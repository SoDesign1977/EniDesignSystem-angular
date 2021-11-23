import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniSquarelistcheckboxComponent } from './eni-squarelistcheckbox.component';

export default {
  component: EniSquarelistcheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniSquarelistcheckboxComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Square/Checkbox/EniSquareListCheckbox",
} as Meta;

const Template: Story<EniSquarelistcheckboxComponent> = (args: EniSquarelistcheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  ListSquare :[
    {
      value: "non",
      icon: require("../../styles/assets/images/refused.svg"),
      disabled: true,
    },
    {
      value: "oui",
      icon: require("../../styles/assets/images/success.svg"),
      disabled: false,
    
    },
    {
      value: "yol",
      icon: require("../../styles/assets/images/success.svg"),
      disabled: false,
    
    },
  ],
  required:true,
  legend : "test",
};

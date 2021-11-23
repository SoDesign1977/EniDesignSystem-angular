import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniSquarelistradioComponent } from './eni-squarelistradio.component';

export default {
  component: EniSquarelistradioComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniSquarelistradioComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Square/Radio/EniSquareListRadio",
} as Meta;

const Template: Story<EniSquarelistradioComponent> = (args: EniSquarelistradioComponent) => ({
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

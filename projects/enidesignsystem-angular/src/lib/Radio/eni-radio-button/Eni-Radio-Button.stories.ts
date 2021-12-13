import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { EniRadioButtonComponent } from './eni-radio-button.component';

import { FormsModule } from '@angular/forms';


export default {
  component: EniRadioButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniRadioButtonComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Radio/EniRadioButton",
} as Meta;

const Template: Story<EniRadioButtonComponent> = (args: EniRadioButtonComponent) => ({
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  title: "RadioButton",
  radio: [
    {
      value:"Test1",
      disabled:false,
      checked:false,
    },
    {
      value:"Test2",
      disabled:true,
      checked:true,
    },
    {
      value:"Test3",
      disabled:false,
      checked:false,
    },
    {
      value:"Test4",
      disabled:false,
      checked:false,
    },
    {
      value:"Test5",
      disabled:false,
      checked:false,
    },
  ],
  required: true,
  name:"yol",
};

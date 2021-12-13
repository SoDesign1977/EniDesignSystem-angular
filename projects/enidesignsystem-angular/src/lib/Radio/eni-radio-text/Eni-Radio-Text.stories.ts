import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { EniRadioTextComponent } from './eni-radio-text.component';

import { FormsModule } from '@angular/forms';


export default {
  component: EniRadioTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniRadioTextComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Radio/EniRadioText",
} as Meta;

const Template: Story<EniRadioTextComponent> = (args: EniRadioTextComponent) => ({
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
      disabled:false,
      checked:false,
    },
    {
      value:"Test3",
      disabled:true,
      checked:true,
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

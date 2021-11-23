import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';


import { EniInputComponent } from './eni-input.component';


export default {
  component: EniInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniInputComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Components/Input/EniInput',
} as Meta;

const Template: Story<EniInputComponent> = (args: EniInputComponent) => ({
  props: args,
});


export const Default = Template.bind({});
Default.args = {

    title: 'Label',
    placeholder: 'Placeholder',
    errorMessage:"errorMessage",

};

export const Required = Template.bind({});
Required.args = {

    title: 'Label',
    errorMessage:"this is Required",
    placeholder: 'Placeholder',
    required:true

};

export const Disabled = Template.bind({});
Disabled.args = {
 
    title: 'Disabled',
    errorMessage:"errorMessage",
    placeholder: 'Input disabled',
    disabled: true,

};

export const Error = Template.bind({});
Error.args = {

    title: 'Email',
    errorMessage:"Is not an Email",
    type:"email",
    required:true,
    placeholder:"(onChange in the console)",
};


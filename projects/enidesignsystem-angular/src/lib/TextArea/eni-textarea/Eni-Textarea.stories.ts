import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EniTextareaComponent } from './eni-textarea.component';

export default {
  component: EniTextareaComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniTextareaComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/TextArea/EniTextArea",
} as Meta;

const Template: Story<EniTextareaComponent> = (args: EniTextareaComponent) => ({
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
    title: 'Type Something',
    errorMessage:"le text doit faire entre 5 et 10 character",
    minLength:5,
    required:false,
    maxLength:10,
    placeholder:"(onChange in the console)",
};

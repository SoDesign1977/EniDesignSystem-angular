import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';



import { EniStatusComponent } from './eni-status.component';


export default {
  component: EniStatusComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniStatusComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Status/EniStatus",
} as Meta;

const Template: Story<EniStatusComponent> = (args: EniStatusComponent) => ({
  props: args,
});


export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  state: "disabled",
  message: "Contenu du message d'information",
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  state: "error",
  message: "Contenu du message d'information",
};

export const RejectedDefault = Template.bind({});
RejectedDefault.args = {
  state: "rejected",
  message: "Contenu du message d'information",
};

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  state: "success",
  message: "Contenu du message d'information",
};
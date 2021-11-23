import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';


import  {EniAlertComponent} from './eni-alert.component';

export default {
  component: EniAlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniAlertComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Alert/EniAlert",
} as Meta;

const Template: Story<EniAlertComponent> = (args: EniAlertComponent) => ({
  props: args,
});


export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  state: "success",
  message: "Contenu du message d'information",

};

export const SuccessLinkText = Template.bind({});
SuccessLinkText.args = {
  state: "success",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  state: "error",
  message: "Contenu du message d'information",
};

export const ErrorLinkText = Template.bind({});
ErrorLinkText.args = {
  state: "error",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
};

export const InfoDefault = Template.bind({});
InfoDefault.args = {
  state: "info",
  message: "Contenu du message d'information",
};

export const InfoLinkText = Template.bind({});
InfoLinkText.args = {
  state: "info",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
};

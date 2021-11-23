import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';



import { EniModaleComponent } from './eni-modale.component';


export default {
  component: EniModaleComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniModaleComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Modale/EniModale",
} as Meta;

const Template: Story<EniModaleComponent> = (args: EniModaleComponent) => ({
  props: args,
});


export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
	state:"success",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:true,
	closeAction:()=>{}
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
	state:"error",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:true,
	closeAction:()=>{}
};
export const InfoDefault = Template.bind({});
InfoDefault.args = {
	state:"info",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:true,
	closeAction:()=>{}
};
export const PlainDefault = Template.bind({});
PlainDefault.args = {
	state:"plain",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:true,
	closeAction:()=>{}
};

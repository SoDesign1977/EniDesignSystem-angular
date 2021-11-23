import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';


import { EniTooltipComponent } from './eni-tooltip.component';
export default {
  component: EniTooltipComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniTooltipComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Components/Tooltip/EniTooltip',
} as Meta;

const Template: Story<EniTooltipComponent> = (args: EniTooltipComponent) => ({
  props: args,
});

export const TopDefault = Template.bind({});
TopDefault.args = {
  state:"top",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",

};

export const BottomDefault = Template.bind({});
BottomDefault.args = {
  state:"bottom",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",

};
export const LeftDefault = Template.bind({});
LeftDefault.args = {
  state:"left",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",

};
export const RightDefault = Template.bind({});
RightDefault.args = {
  state:"right",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",

};


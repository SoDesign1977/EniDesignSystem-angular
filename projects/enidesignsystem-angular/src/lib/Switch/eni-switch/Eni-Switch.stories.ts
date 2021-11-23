import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniSwitchComponent } from './eni-switch.component';


export default {
  component: EniSwitchComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniSwitchComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Switch/EniSwitch",
} as Meta;

const Template: Story<EniSwitchComponent> = (args: EniSwitchComponent) => ({
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  title: "Label",
};
export const Checked = Template.bind({});
Checked.args = {
  title: "Label",
  checked:true
};
export const Disabled = Template.bind({});
Disabled.args = {
  title: "Label",
  disabled:true
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  title: "Label",
  disabled:true,
  checked:true
};

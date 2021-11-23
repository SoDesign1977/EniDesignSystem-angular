import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniCheckboxComponent } from './eni-checkbox.component';


export default {
  component: EniCheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniCheckboxComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Checkbox/EniCheckbox",
} as Meta;

const Template: Story<EniCheckboxComponent> = (args: EniCheckboxComponent) => ({
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

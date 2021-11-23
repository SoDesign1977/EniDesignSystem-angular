import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniListcheckboxComponent } from './eni-listcheckbox.component';

export default {
  component: EniListcheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniListcheckboxComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Checkbox/EniListCheckbox",
} as Meta;

const Template: Story<EniListcheckboxComponent> = (args: EniListcheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
legend:"Checkbox",
ListCheckox:[  
  {
    value: "Test1",
    disabled: false,
    checked: true,
  },
  {
    value: "Test2",
    disabled: true,
    checked: true,
  },
  {
    value: "Test3",
    disabled: false,
    checked: false,
  },
  {
    value: "Test4",
    disabled: false,
    checked: false,
  },
  {
    value: "Test5",
    disabled: false,
    checked: false,
  },
],
required: true
};

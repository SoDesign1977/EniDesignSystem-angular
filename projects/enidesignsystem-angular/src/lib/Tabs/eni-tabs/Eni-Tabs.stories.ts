import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EniTabsComponent } from './eni-tabs.component';

export default {
  component: EniTabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniTabsComponent],
      imports: [CommonModule,FormsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Tabs/EniTabs",
} as Meta;

const Template: Story<EniTabsComponent> = (args: EniTabsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  Tabs:[{
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed `,
    disabled:false
  },
  {
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`Fusce molestie `,
    disabled:false
  },
  {
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`pulvinar, faucibus volutpat leo viverra. Sed `,
    disabled:true
  },
  {
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed`,
    disabled:true
  },
  {
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed </p>`,
    disabled:false
  },
  {
    icon: require("../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:`Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed `,
    disabled:true
  },
  

]
  };


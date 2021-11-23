import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';


import  {EniBreadcrumbComponent} from './eni-breadcrumb.component';

export default {
  component: EniBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      declarations: [EniBreadcrumbComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: "Components/Breadcrumb/EniBreadcrumb",
} as Meta;

const Template: Story<EniBreadcrumbComponent> = (args: EniBreadcrumbComponent) => ({
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  arianne: [
    { title: "level 1", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 2", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 3", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
  ],
  message: "Vous êtes ici :",
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  arianne: [
    { title: "level 1", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 2", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 3", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
  ],
  message: "",
};

export const Checked = Template.bind({});
Checked.args = {
  arianne: [
    { title: "level 1", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 2", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 3", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
  ],
  message: "Vous êtes ici :",
};

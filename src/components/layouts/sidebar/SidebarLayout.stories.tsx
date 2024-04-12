
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
    title: 'layouts/SidebarLayout',
    component: SidebarLayout,
    argTypes: {},
} as any;

const Template: any = (args:any) => (
    <SidebarLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockSidebarLayoutProps.base,
} as ISidebarLayout;

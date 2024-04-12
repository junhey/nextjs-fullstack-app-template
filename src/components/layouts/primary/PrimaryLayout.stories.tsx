
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

export default {
    title: 'layouts/PrimaryLayout',
    component: PrimaryLayout,
    argTypes: {},
} as any;

const Template: any = (args:any) => (
    <PrimaryLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;

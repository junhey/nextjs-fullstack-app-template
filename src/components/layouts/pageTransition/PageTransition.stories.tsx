
import PageTransition, { IPageTransition } from './PageTransition';
import { mockIPageTransitionProps } from './PageTransition.mocks';

export default {
    title: 'layouts/PrimaryLayout',
    component: PageTransition,
    argTypes: {},
} as any;

const Template: any= (args:any) => (
    <PageTransition {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockIPageTransitionProps.base,
} as IPageTransition;

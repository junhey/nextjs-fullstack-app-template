
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
    title: 'templates/BaseTemplate',
    component: BaseTemplate,
    argTypes: {},
} as any;

const Template: any = (args:any) => (
    <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockBaseTemplateProps.base,
} as IBaseTemplate;

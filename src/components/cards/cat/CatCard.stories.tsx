import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
    title: 'cards/CatCard',
    component: CatCard,
    argTypes: {},
} as any;

const Template: any = (args:any) => (
    <CatCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockCatCardProps.base,
} as ICatCard;

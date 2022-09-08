import { Component, FC, Image } from '@/libs/common';
import { LandingPageProps } from './types';
import Icon from '@/atoms/Icon';

const $content = {
    header: {
        brand: 'BrandName',
        navigation: [
            { text: 'Home' },
            { text: 'Product' },
            { text: 'Pricing' },
            { text: 'Contact' },
        ],
        actions: [
            {
                text: 'Login',
            },
            {
                text: 'JOIN US',
            },
        ],
    },

    hero: {
        title: 'Best Learning Opportunities',
        subtitle: 'Welcome',
        description: `
        We know how large objects will act,
        but things on a small scale`,
        cta: {
            primary: `Get Quote Now`,
            secondary: `Learn More`,
        },
        cover: '/assets/images/image-1.png',
    },

    features: {
        title: 'Watch our Courses',
        description: `
        Problems trying to resolve the conflict between
        the two major realms of Classical physics:
        Newtonian mechanics`,
        cta: `Learn More`,
        items: [
            {
                id: 0,
                title: 'Certified Teacher',
                description: `
                The gradual
                accumulation of
                information about`,
                icon: 'check-underline',
            },
            {
                id: 1,
                title: 'Market Analysis',
                description: `
                The gradual
                accumulation of
                information about`,
                icon: 'credit-card',
            },
            {
                id: 2,
                title: 'Sales Planning',
                description: `
                The gradual
                accumulation of
                information about`,
                icon: 'tag',
            },
        ],
    },

    summary: {
        title: 'Featured Products',
        description: `
        Problems trying to resolve the conflict between
        the two major realms of Classical physics:
        Newtonian mechanics`,
        cta: `Learn More`,
        cover: '/assets/images/image-2.png',
    },

    packages: {
        title: 'Packages that are parolable',
        description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
        cta: 'Learn More',
        items: [
            {
                id: 0,
                cover: '/assets/images/image-3.jpeg',
                department: 'English Department',
                title: 'Graphic Design',
                description: `
                We focus on ergonomics and meeting
                you where you work. It's only a
                keystroke away.`,
                stars: '4.9',
                sale: {
                    value: '15',
                    unit: 'Sales',
                },
                price: {
                    old: '$16.48',
                    new: '$6.48',
                },
                duration: '22hr 30min',
                lessons: '64 Lessons',
                tag: 'Progress',
                badge: 'Sale',
            },
        ],
    },

    feedbacks: {
        title: 'Each and every client is important.',
        description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
        items: [
            {
                user: 'Regina Miles',
                link: '@username_in_twitter_or_github',
                role: 'Designer',
                paragraph: `
                Slate helps you see
                how many more days
                you need to work to
                reach your financial
                goal for the month
                and year.`,
                avatar: '/assets/images/image-3.jpg', /// 'https://api.lorem.space/image/face?w=150&h=150',
            },
        ],
    },

    subscribe: {
        title: 'JOIN US',
        description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
        mailbox: 'Your Email',
        submit: 'Subscribe',
    },

    footer: {
        social: {
            title: 'Get In Touch',
            paragraph: 'the quick fox jumps over the lazy dog',
        },

        information: {
            title: 'Company info',
            nav: {
                aboutUs: 'About Us',
                carrier: 'Carrier',
                weAreHiring: 'We are hiring',
                blog: 'Blog',
            },
        },

        features: {
            title: 'Features',
            nav: {
                businessMarketing: 'Business Marketing',
                userAnalytic: 'User Analytic',
                liveChat: 'Live Chat',
                unlimitedSupport: 'Unlimited Support',
            },
        },

        resources: {
            title: 'Resources',
            nav: {
                iosAndAndroid: 'IOS & Android',
                watchADemo: 'Watch a Demo',
                customers: 'Customers',
                api: 'API',
            },
        },

        /* Love <=> <Icon name="heart" /> */
        /* Company <=> <Text>Figma<no-space>land</Text> */
        copyright: 'Made With Love By Company All Right Reserved',
    },
};


export default class LandingPageTemplate extends Component<LandingPageProps> {
    constructor(props: LandingPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <>
            </>
        );
    }
}

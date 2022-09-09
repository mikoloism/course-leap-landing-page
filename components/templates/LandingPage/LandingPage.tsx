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
        description: `Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics`,
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

const Layout = {
    Header() {
        return (
            <header
                id="header"
                className="grid grid-cols-12 grid-rows-6 w-screen h-36 place-content-center place-items-center bg-secondary text-white text-center font-montserrat px-32 sticky top-0">
                <h3 className="text-h3 space-x-0 space-y-0 p-0 font-montserrat align-middle col-start-1 col-end-3 row-start-1 row-end-7">
                    {$content.header.brand}
                </h3>
                <nav
                    id="navigation"
                    className="flex-wrap flex-row inline-flex place-content-center place-items-center w-full h-full col-start-4 col-end-8 row-start-1 row-end-7">
                    <ul className="flex flex-wrap flex-row w-full h-full space-x-0 space-y-0 p-0 place-content-center place-items-center">
                        {$content.header.navigation.map((item) => {
                            return (
                                <li
                                    key={item.text}
                                    className="w-1/4 h-full list-none inline-flex flex-col flex-wrap place-justify-center place-content-center font-montserrat text-link">
                                    <a className="w-full">{item.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <section className="col-start-10 col-end-13 row-start-1 row-end-7 w-full h-full inline-flex flex-wrap flex-row content-center justify-around place-items-center text-center">
                    <a className="rounded-md w-[45%] h-20 text-white text-center text-link inline-flex flex-wrap flex-row place-items-center place-content-center">
                        {$content.header.actions[0].text}
                    </a>
                    <a className="rounded-md w-[45%] h-20 bg-primary text-center text-link inline-flex flex-wrap flex-row place-items-center place-content-center fill-white">
                        <span className="w-1/2 h-1/2 inline-flex flex-wrap flex-column place-items-center place-content-center">
                            {$content.header.actions[1].text}
                        </span>
                        <Icon
                            name="arrow-right"
                            className="p-0 space-x-0 space-y-0 w-1/4 h-1/4 inline-flex flex-wrap flex-column place-content-center place-items-center overflow-hidden"
                            size=".7"
                        />
                    </a>
                </section>
            </header>
        );
    },

    Hero() {
        return (
            <section
                id="hero"
                className="w-screen bg-secondary text-white font-montserrat grid grid-cols-12 grid-rows-6 p-0"
                style={{ height: 'calc(100vh - 9rem)' }}>
                <header className="col-start-2 col-end-7 row-start-2 row-end-5 flex flex-wrap flex-col max-w-full justify-around">
                    <span
                        data-size="h5"
                        className="text-h5 text-primary w-full inline-block">
                        {$content.hero.subtitle}
                    </span>
                    <h1 className="text-h1 w-full text-[85px]">
                        {$content.hero.title}
                    </h1>
                    <p
                        data-size="h4"
                        className="font-normal font-montserrat text-subtitle leading-[60px] w-[590px]">
                        {$content.hero.description}
                    </p>
                </header>
                <section className="col-start-2 col-end-5 row-start-5 row-end-7 inline-flex content-start place-items-start justify-around h-full w-full pt-16">
                    <a className="inline-flex place-items-center place-content-center text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary bg-primary text-white text-center w-[45%]">
                        {$content.hero.cta.primary}
                    </a>
                    <a className="inline-flex place-items-center place-content-center text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary text-primary bg-transparent text-center w-[45%]">
                        {$content.hero.cta.secondary}
                    </a>
                </section>
                <figure
                    className="next-image cover cover--1 relative col-start-7 col-end-13 row-start-1 row-end-7 w-full h-full space-x-0 space-y-0 p-0 place-content-center place-items-center"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridTemplateRows: 'repeat(12, 1fr)',
                    }}>
                    <Image
                        src={$content.hero.cover}
                        alt="image-cover-1"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        style={{
                            gridColumn: '4 / 11',
                            gridRow: '2 / 11',
                            borderRadius: '0.8rem',
                        }}
                    />
                </figure>
            </section>
        );
    },

    Features() {
        return (
            <section
                id="features"
                className="w-screen h-[135vh] py-48 bg-white flex flex-wrap flex-row place-content-center place-items-center text-justify">
                <section className="w-1/2 h-full flex flex-wrap flex-col place-content-center place-items-start">
                    <header className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12">
                        <span
                            id="block"
                            className="w-3/12 h-[6px] bg-accent rounded-full"></span>
                        <h2 className="font-montserrat text-h2">
                            {$content.features.title}
                        </h2>
                        <p className="text-paragraph text-gray font-montserrat w-11/12">
                            {$content.features.description}
                        </p>
                        <a className="rounded-full h-20 w-56 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center justify-start fill-primary text-primary">
                            <span className="w-fit h-full inline-flex flex-wrap flex-column place-items-center place-content-center">
                                {$content.features.cta}
                            </span>
                            <Icon
                                name="chevron-right"
                                className="p-0 space-x-0 space-y-0 w-[20%] h-full inline-flex flex-wrap flex-column place-content-center place-items-center overflow-hidden"
                                size="0.8"
                            />
                        </a>
                    </header>
                </section>
                <section
                    className="w-1/2 h-full grid grid-cols-12 place-items-center justify-around"
                    style={{ gridTemplateRows: 'repeat(12,1fr)' }}>
                    {$content.features.items.map((item) => {
                        return (
                            <section
                                key={item.id}
                                className={`${
                                    {
                                        0: 'col-start-2 col-end-6  row-start-3 row-end-7',
                                        1: 'col-start-7 col-end-11 row-start-5 row-end-[10]',
                                        2: 'col-start-2 col-end-6  row-start-[8] row-end-[12]',
                                    }[item.id]
                                }
                        flex flex-wrap flex-col
                        gap-y-4
                        py-5 px-8
                        shadow-accented
                        text-left
                        w-full h-full
                        rounded-xl
                        `.replace(/\s+/g, ' ')}>
                                <h5 className="order-2 font-montserrat text-h5">
                                    {item.title}
                                </h5>
                                <span
                                    id="block"
                                    className="order-3 w-3/12 h-1 bg-accent rounded-full"></span>
                                <p className="order-4 text-paragraph text-gray">
                                    {item.description}
                                </p>
                                <Icon
                                    size="0.8"
                                    className={`
                            ${
                                {
                                    'check-underline':
                                        'bg-box-bg-blue fill-primary',
                                    'credit-card': 'bg-box-bg-red fill-accent',
                                    tag: 'bg-box-bg-green fill-accent-green',
                                }[item.icon]
                            }
                            order-1
                            w-24 h-24
                            flex
                            flex-wrap place-content-center place-items-center
                            rounded-2xl
                            `.replace(/[\s]{1,}/gi, ' ')}
                                    name={item.icon as any}
                                />
                            </section>
                        );
                    })}
                </section>
            </section>
        );
    },

    Summary() {
        return (
            <section
                id="summary"
                className="w-screen h-[135vh] py-48 bg-white flex flex-wrap flex-row place-content-center place-items-center text-justify">
                <section className="w-1/2 h-full flex flex-wrap flex-col place-content-center place-items-start order-1">
                    <header className="w-1/2 h-1/2 flex flex-wrap flex-col place-items-start place-content-center gap-y-12">
                        <span
                            id="block"
                            className="w-3/12 h-[6px] bg-accent rounded-full"></span>
                        <h2 className="font-montserrat text-h2">
                            {$content.summary.title}
                        </h2>
                        <p className="text-paragraph text-gray font-montserrat w-11/12">
                            {$content.summary.description}
                        </p>
                        <a className="rounded-full h-20 w-56 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center justify-start fill-primary text-primary">
                            <span className="w-fit h-full inline-flex flex-wrap flex-column place-items-center place-content-center">
                                {$content.summary.cta}
                            </span>
                            <Icon
                                name="chevron-right"
                                className="p-0 space-x-0 space-y-0 w-[20%] h-full inline-flex flex-wrap flex-column place-content-center place-items-center overflow-hidden"
                                size="0.8"
                            />
                        </a>
                    </header>
                </section>
                <figure
                    className="next-image cover cover--2 relative inline-grid col-start-7 col-end-13 row-start-1 row-end-7 w-1/2 h-full space-x-0 space-y-0 p-0 place-content-center place-items-center"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridTemplateRows: 'repeat(12, 1fr)',
                    }}>
                    <Image
                        src={$content.summary.cover}
                        alt="image-cover-1"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        style={{
                            gridColumn: '4 / 11',
                            gridRow: '2 / 11',
                            borderRadius: '5rem',
                        }}
                    />
                </figure>
            </section>
        );
    },
};

export default class LandingPageTemplate extends Component<LandingPageProps> {
    constructor(props: LandingPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <>
                <Layout.Header />
                <Layout.Hero />
                <Layout.Features />
                <Layout.Summary />

            </>
        );
    }
}

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
            {
                id: 1,
                cover: '/assets/images/image-5.jpg',
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
            {
                id: 2,
                cover: '/assets/images/image-4.jpg',
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
                avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
            },
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
                avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
            },
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
                avatar: '/assets/images/image-1.png', /// 'https://api.lorem.space/image/face?w=150&h=150',
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

const Products = {
    ProductItemBody({ item }: { item: any }) {
        return (
            <section
                className="order-2 flex flex-wrap flex-col place-content-center place-items-center gap-y-1 w-full"
                id="main">
                <header className="relative flex flex-wrap flex-col place-content-center place-items-center items-start w-full gap-y-2 px-4 mt-4">
                    <h5 className="text-h5 order-2">{item.title}</h5>
                    <a
                        data-order="0"
                        className="text-link text-primary order-1">
                        {item.department}
                    </a>
                    <p className="text-paragraph text-gray order-4">
                        {item.description}
                    </p>
                    <section className="bg-black text-white fill-accent-gold w-20 h-10 inline-flex flex-col flex-wrap place-content-center place-items-center content-start rounded-full text-center text-standard absolute top-1 right-4">
                        <Icon
                            className="w-1/2 h-full inline-flex flex-wrap place-content-center place-items-center"
                            name="star-fill"
                            scale="0.5"
                        />
                        <span className="h-full inline-flex flex-wrap place-content-center place-items-center">
                            {item.stars}
                        </span>
                    </section>
                </header>

                <section className="flex flex-wrap flex-col place-content-start place-items-center font-montserrat gap-y-2 w-full">
                    <div className="flex flex-wrap flex-row place-content-start place-items-center text-gray text-standard fill-gray-400 w-full">
                        <Icon name="download-box" />
                        <strong>
                            {item.sale.value} {item.sale.unit}
                        </strong>
                    </div>

                    <div className="flex flex-row flex-wrap place-content-start place-items-center gap-x-2 text-paragraph w-full px-4">
                        <span className="text-gray-400">
                            {item.price.old /* */}
                        </span>
                        <strong className="text-accent-green">
                            {item.price.new}
                        </strong>
                    </div>

                    <div className="flex flex-wrap flex-row place-content-center place-items-center text-standard font-normal text-gray w-full">
                        <span className="inline-flex flex-wrap flex-row place-content-start place-items-center gap-x-1 fill-primary w-1/3">
                            <Icon
                                name="alarm"
                                scale="0.5"
                                className="w-[24%] inline-flex flex-wrap flex-col place-content-center place-items-center"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.duration}
                            </span>
                        </span>
                        <span className="inline-flex flex-wrap flex-row place-content-center place-items-center gap-x-1 fill-accent-gold w-1/3">
                            <Icon
                                name="book-open"
                                scale="0.5"
                                className="w-[24%] inline-flex flex-wrap flex-col place-content-center place-items-center"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.lessons}
                            </span>
                        </span>
                        <span className="inline-flex flex-wrap flex-row place-content-center place-items-center gap-x-1 fill-accent-green w-1/3">
                            <Icon
                                name="bookmark"
                                scale="0.5"
                                className="w-[24%] inline-flex flex-wrap flex-col place-content-center place-items-center"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.tag}
                            </span>
                        </span>
                    </div>

                    <div className="w-full flex flex-wrap flex-row place-content-start place-items-center">
                        <a className="rounded-full h-16 w-52 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center fill-primary text-primary border border-primary">
                            <span className="w-fit h-full inline-flex flex-wrap flex-column place-items-center place-content-center">
                                {$content.packages.cta}
                            </span>
                            <Icon
                                name="chevron-right"
                                className="p-0 space-x-0 space-y-0 w-[15%] h-full inline-flex flex-wrap flex-column place-content-center place-items-center overflow-hidden"
                                scale="0.8"
                            />
                        </a>
                    </div>
                </section>
            </section>
        );
    },

    ProductItemCover({ item }: { item: any }) {
        return (
            <section
                className="relative order-1 w-full h-5/12 group overflow-hidden"
                id="top">
                <span className="absolute -top-24 group-hover:top-5 left-5 inline-flex place-content-center place-items-center bg-accent text-white text-standard w-16 h-10 rounded-md z-10 transition-all opacity-0 group-hover:opacity-100">
                    {item.badge}
                </span>
                <figure
                    className="next-image relative w-full h-full space-x-0 space-y-0 p-0 place-content-center place-items-center"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridTemplateRows: 'repeat(12, 1fr)',
                    }}>
                    <Image
                        src={item.cover}
                        alt="image-cover-1"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        style={{
                            gridColumn: '1/13',
                            gridRow: '1/13',
                            borderRadius: '0.4rem',
                        }}
                    />
                </figure>
                <section
                    id="overlay-actions"
                    className="inline-flex flex-wrap flex-row place-content-center place-items-center w-full h-16 absolute -bottom-24 group-hover:bottom-6 right-0 left-0 gap-x-12 z-10 transition-all opacity-0 group-hover:opacity-100">
                    <button
                        type="button"
                        className="w-14 h-14 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-full bg-white fill-black">
                        <Icon
                            name="heart"
                            scale="0.5"
                        />
                    </button>
                    <button
                        type="button"
                        className="w-14 h-14 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-full bg-white fill-black">
                        <Icon
                            name="shopping-cart"
                            scale="0.5"
                        />
                    </button>
                    <button
                        type="button"
                        className="w-14 h-14 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-full bg-white fill-black">
                        <Icon
                            name="eye"
                            scale="0.5"
                        />
                    </button>
                </section>
            </section>
        );
    },

    ProductItem({ item }: { item: any }) {
        return (
            <section
                id="item"
                key={item.id}
                className="relative w-[30%] flex flex-col flex-wrap place-content-center place-items-center">
                <a id="link-overlay absolute"></a>
                <Products.ProductItemBody item={item} />
                <Products.ProductItemCover item={item} />
            </section>
        );
    },
};

const FeedbackItem = ({ item }: { item: any }) => (
    <section
        className="bg-white w-[30%] h-full flex flex-col flex-wrap place-content-center place-items-center gap-y-8 py-6 rounded-md"
        id="feedbacks-item">
        <section
            className="relative flex flex-row flex-wrap place-content-center place-items-center order-3 gap-x-2 w-8/12 h-20 text-left"
            data-order="2">
            <a
                className="absolute opacity-0"
                data-overly-link></a>

            <figure
                className="next-image relative w-20 h-20 space-x-0 space-y-0 p-0 place-content-center place-items-center"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: 'repeat(12, 1fr)',
                }}>
                <Image
                    src={item.avatar}
                    alt="avatar-1"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    style={{
                        gridColumn: '1/13',
                        gridRow: '1/13',
                        borderRadius: '9999rem',
                    }}
                />
            </figure>

            <section
                className="flex flex-wrap flex-col place-content-start place-items-center h-full"
                style={{
                    width: 'calc(100% - 5.5rem)',
                }}>
                <strong className="flex flex-wrap flex-row place-content-start place-items-center w-full h-1/2 text-primary text-link">
                    {item.user}
                </strong>
                <span className="flex flex-wrap flex-row place-content-start place-items-center w-full h-1/2 text-gray text-standard">
                    {item.role}
                </span>
            </section>
        </section>

        <ul
            className="flex flex-row flex-wrap w-full h-16 place-content-center place-items-center gap-x-6 fill-accent-gold list-none order-1"
            id="rates"
            data-order="0">
            <li id="star[fill]">
                <Icon
                    name="star-fill"
                    scale="1"
                />
            </li>
            <li id="star[fill]">
                <Icon
                    name="star-fill"
                    scale="1"
                />
            </li>
            <li id="star[fill]">
                <Icon
                    name="star-fill"
                    scale="1"
                />
            </li>
            <li id="star[fill]">
                <Icon
                    name="star-fill"
                    scale="1"
                />
            </li>
            <li id="star[outline]">
                <Icon
                    name="star"
                    scale="1"
                />
            </li>
        </ul>

        <p
            className="order-2 text-paragraph px-24 text-gray"
            data-order="1">
            {item.paragraph}
        </p>
    </section>
);

const NavItem = ({
    children,
    h,
    w,
    place,
}: {
    place?: any;
    children: any;
    h?: any;
    w?: any;
}) => {
    return (
        <li
            className={`flex flex-wrap flex-col place-content-center place-items-center ${
                w ?? 'w-full'
            } ${h ?? 'h-1/4'}`}>
            <a
                className={`w-full h-full inline-flex flex-wrap flex-col ${
                    place ?? 'place-content-start place-items-center'
                }`}>
                {children}
            </a>
        </li>
    );
};

const NavList = ({ children }: { children: any }) => {
    return (
        <nav
            className="flex flex-wrap flex-col place-content-center place-items-center w-full"
            style={{ height: 'calc(100% - 32rem)' }}>
            <ul className="flex flex-wrap flex-col place-content-center place-items-center w-full h-full gap-y-6">
                {children}
            </ul>
        </nav>
    );
};

const FooterItem = ({ children }: { children: any }) => {
    return (
        <section
            className="w-[20%] h-full gap-y-2 flex flex-wrap flex-col place-content-center place-items-center"
            id="resources">
            {children}
        </section>
    );
};

const Footer = {
    Resources() {
        return (
            <FooterItem>
                <header className="flex flex-wrap flex-col place-content-start place-items-start w-full">
                    <h3 className="text-h3">
                        {$content.footer.resources.title}
                    </h3>
                </header>
                <NavList>
                    <NavItem>
                        {$content.footer.resources.nav.iosAndAndroid}
                    </NavItem>
                    <NavItem>
                        {$content.footer.resources.nav.watchADemo}
                    </NavItem>
                    <NavItem>{$content.footer.resources.nav.customers}</NavItem>
                    <NavItem>{$content.footer.resources.nav.api}</NavItem>
                </NavList>
            </FooterItem>
        );
    },

    Features() {
        return (
            <FooterItem>
                <header className="flex flex-wrap flex-col place-content-start place-items-start w-full">
                    <h3 className="text-h3">
                        {$content.footer.features.title}
                    </h3>
                </header>
                <NavList>
                    <NavItem>
                        {$content.footer.features.nav.businessMarketing}
                    </NavItem>
                    <NavItem>
                        {$content.footer.features.nav.userAnalytic}
                    </NavItem>
                    <NavItem>
                        {$content.footer.features.nav.liveChat /**/}
                    </NavItem>
                    <NavItem>
                        {$content.footer.features.nav.unlimitedSupport}
                    </NavItem>
                </NavList>
            </FooterItem>
        );
    },

    Information() {
        return (
            <FooterItem>
                <header className="flex flex-wrap flex-col place-content-start place-items-start w-full">
                    <h3 className="text-h3">
                        {$content.footer.information.title}
                    </h3>
                </header>
                <NavList>
                    <NavItem>{$content.footer.information.nav.aboutUs}</NavItem>
                    <NavItem>{$content.footer.information.nav.carrier}</NavItem>
                    <NavItem>
                        {$content.footer.information.nav.weAreHiring}
                    </NavItem>
                    <NavItem>
                        {$content.footer.information.nav.blog /**/}
                    </NavItem>
                </NavList>
            </FooterItem>
        );
    },

    Socials() {
        return (
            <FooterItem>
                <header className="flex flex-wrap flex-col place-content-start place-items-start w-full">
                    <h3 className="text-h3">{$content.footer.social.title}</h3>
                    <p className="text-paragraph w-8/12">
                        {$content.footer.social.paragraph}
                    </p>
                </header>
                <ul className="flex flex-wrap flex-row place-content-center place-items-center fill-primary w-full h-16">
                    <NavItem
                        h="h-full"
                        w="w-1/3"
                        place="place-content-center place-items-center">
                        <Icon
                            className="inline-flex flex-wrap flex-col place-content-center place-items-center"
                            name="linkedin"
                            scale="1.3"
                        />
                    </NavItem>
                    <NavItem
                        h="h-full"
                        w="w-1/3"
                        place="place-content-center place-items-center">
                        <Icon
                            className="inline-flex flex-wrap flex-col place-content-center place-items-center"
                            name="instagram"
                            scale="1.3"
                        />
                    </NavItem>
                    <NavItem
                        h="h-full"
                        w="w-1/3"
                        place="place-content-center place-items-center">
                        <Icon
                            className="inline-flex flex-wrap flex-col place-content-center place-items-center"
                            name="twitter"
                            scale="1.3"
                        />
                    </NavItem>
                </ul>
            </FooterItem>
        );
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
                        priority
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
                                scale="0.8"
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
                                    scale="0.8"
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
                                scale="0.8"
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

    Packages() {
        return (
            <section
                id="packages"
                className="flex flex-col flex-wrap place-content-center place-items-center w-screen h-[135vh] gap-y-16">
                <section className="flex flex-col flex-wrap place-items-center place-content-start w-10/12 px-4">
                    <header className="flex flex-wrap flex-col place-content-center place-items-center items-start w-6/12">
                        <h2 className="text-h2">{$content.packages.title}</h2>
                        <p className="text-paragraph text-justify text-gray w-10/12">
                            {$content.packages.description}
                        </p>
                    </header>
                </section>
                <section
                    style={{ height: 'calc(135vh - 32rem)' }}
                    className="flex flex-wrap flex-col place-content-center place-items-center w-full overflow-hidden">
                    <section
                        className="flex flex-wrap flex-row place-content-center place-items-center w-[86%] gap-x-16 px-24"
                        id="items">
                        {$content.packages.items.map((item) => {
                            return (
                                <Products.ProductItem
                                    key={item.id}
                                    item={item}
                                />
                            );
                        })}
                    </section>
                </section>
            </section>
        );
    },

    Feedbacks() {
        return (
            <section
                className="flex flex-wrap flex-col place-content-center place-items-center bg-secondary h-[115vh] w-full gap-y-32 font-montserrat"
                id="feedbacks">
                <header className="text-white place-self-start px-20">
                    <h2 className="text-h2">{$content.feedbacks.title}</h2>
                    <p className="text-paragraph w-8/12">
                        {$content.feedbacks.description}
                    </p>
                </header>
                <section
                    className="w-10/12 flex flex-col flex-wrap place-content-center place-items-center gap-x-4"
                    style={{ height: 'calc(100% - 45rem)' }}>
                    {$content.feedbacks.items.map((item, index) => {
                        return (
                            <FeedbackItem
                                item={item}
                                key={`${item.user}${index}`}
                            />
                        );
                    })}
                </section>
            </section>
        );
    },

    Subscribe() {
        return (
            <section
                className="h-[75vh] w-screen flex flex-wrap flex-col place-content-center place-items-center font-montserrat"
                id="subscribe">
                <header className="w-4/12 h-64 flex flex-wrap flex-col place-content-center place-items-start gap-y-2 text-left">
                    <h2 className="text-h2">{$content.subscribe.title}</h2>
                    <p className="text-paragraph">
                        {$content.subscribe.description}
                    </p>
                </header>
                <form className="flex flex-wrap w-4/12 h-20 flex-row place-content-center place-items-center border-gray-300 border-solid border-4 rounded-lg p-0">
                    <input
                        className="inline-flex flex-wrap flex-col place-content-center place-items-center h-full w-9/12 bg-gray-200 text-black font-semibold placeholder:text-gray placeholder:font-montserrat placeholder:text-input text-2xl focus:border-none focus:outline-0 focus:stroke-0 group-focus:bg-primary font-montserrat rounded-l-md px-8 py-4 space-x-0 space-y-0"
                        type="mail"
                        placeholder={$content.subscribe.mailbox}
                    />
                    <button
                        className="h-full w-3/12 inline-flex flex-wrap flex-col place-content-center place-items-center rounded-r-md bg-primary text-white px-8 py-4 border-solid border-4 border-primary text-btn"
                        type="button">
                        {$content.subscribe.submit}
                    </button>
                </form>
            </section>
        );
    },

    Footer() {
        return (
            <footer
                className="flex flex-wrap flex-col place-content-center place-items-center w-screen"
                id="footer">
                <section className="flex flex-wrap flex-row-reverse place-content-center place-items-center w-8/12 gap-x-6">
                    <Footer.Resources />
                    <Footer.Features />
                    <Footer.Information />
                    <Footer.Socials />
                </section>
            </footer>
        );
    },

    Copyright() {
        return (
            <section
                className="h-16 w-screen bg-gray-200 text-center place-content-center place-items-center flex flex-wrap flex-col"
                style={{ marginTop: '4rem' }}
                id="copyright">
                <p className="text-standard">{$content.footer.copyright}</p>
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
                <Layout.Packages />
                <Layout.Feedbacks />
                <Layout.Subscribe />
                <Layout.Footer />
                <Layout.Copyright />
            </>
        );
    }
}

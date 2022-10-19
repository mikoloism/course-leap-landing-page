import { Group, Image, Link, Text } from '@/atoms';
import type { PropsWithChildren, PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';
import style from '@/styles/hero.module.css';

function HeroHeader({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'hero_header');

    return (
        <header
            className={`flex flex-wrap flex-col max-w-full justify-around ${className}`}>
            <Text
                size="h5"
                color="primary"
                className="w-full inline-block">
                {content('subtitle')}
            </Text>
            <Text
                as="h1"
                color="white"
                align="left"
                className="w-full">
                {content('title')}
            </Text>
            <Text
                as="p"
                size="subtitle"
                color="white"
                className="font-normal leading-[60px] w-[590px]">
                {content('description')}
            </Text>
        </header>
    );
}

function HeroCover({ className }: PropsWithClassName<{}>) {
    return (
        <Image
            className={`next-image cover w-full h-full ${style.heroCoverWrapper} ${className}`}
            src="/image-1.png"
            alt="landing-page-cover"
            imageClassName={style.heroCoverImage}
        />
    );
}

function HeroAction({ className }: PropsWithClassName<{}>) {
    const { content } = useContent('landing-page', 'hero_call_to_actions');

    return (
        <Group
            type="inline-flex"
            dir="row"
            gapx="10"
            placeItems="center"
            placeContent="center"
            className={`h-full w-full ${className}`}>
            <span
                id="cta-more-button"
                className="hidden"
                aria-hidden></span>
            <span
                id="hero-cta-primary"
                className="hidden"
                aria-hidden></span>
            <span
                id="hero-cta-secondary"
                className="hidden"
                aria-hidden></span>
            <Link
                href="#hero-cta-primary"
                className="text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary bg-primary text-white text-center w-[45%]">
                {content('primary')}
            </Link>
            <Link
                href="#hero-cta-secondary"
                className="text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary text-primary bg-transparent text-center w-[45%]">
                {content('secondary')}
            </Link>
        </Group>
    );
}

function HeroContainer({ children }: PropsWithChildren<{}>) {
    return (
        <section className={`bg-secondary text-white ${style.hero}`}>
            {children}
        </section>
    );
}

export default function Hero() {
    return (
        <HeroContainer>
            <HeroHeader className={style.heroHeader} />
            <HeroAction className={style.heroAction} />
            <HeroCover className={style.heroCover} />
        </HeroContainer>
    );
}

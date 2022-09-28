import { Group, Image, Link, Text } from '@/atoms';
import type { PropsWithChildren, PropsWithClassName } from '@/libs/common';
import { useContent } from '@/libs/hooks';
import style from '@/styles/layouts/hero.module.css';

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
            className={`next-image cover cover--1 w-full h-full sm:grid hidden ${className}`}
            src="/assets/images/image-1.png"
            alt="landing-page-cover"
            style={{
                gridColumn: '4 / 11',
                gridRow: '2 / 11',
                borderRadius: '0.8rem',
            }}
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
            placeItems="start"
            placeContent="start"
            className={`h-full w-full pt-16 ${className}`}>
            <Link
                href="#/cta/primary"
                className="text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary bg-primary text-white text-center w-[45%]">
                {content('primary')}
            </Link>
            <Link
                href="#/cta/secondary"
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

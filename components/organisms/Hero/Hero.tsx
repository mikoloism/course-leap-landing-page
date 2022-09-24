import { Group, Image, Link, Text } from '@/components/atoms';

const $content = {
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
};

export default function Hero() {
    return (
        <section
            className="w-screen bg-secondary text-white font-montserrat grid grid-cols-12 grid-rows-6 p-0"
            style={{ height: 'calc(100vh - 9rem)' }}>
            <header className="col-start-2 col-end-7 row-start-2 row-end-5 flex flex-wrap flex-col max-w-full justify-around">
                <Text
                    size="h5"
                    color="primary"
                    className="w-full inline-block">
                    {$content.subtitle}
                </Text>
                <Text
                    as="h1"
                    color="white"
                    align="left"
                    className="w-full">
                    {$content.title}
                </Text>
                <Text
                    as="p"
                    size="subtitle"
                    color="white"
                    className="font-normal leading-[60px] w-[590px]">
                    {$content.description}
                </Text>
            </header>
            <Group
                type="inline-flex"
                dir="row"
                gapx="10"
                placeItems="start"
                placeContent="start"
                className="col-start-2 col-end-5 row-start-5 row-end-7 h-full w-full pt-16">
                <Link
                    href="#"
                    className="text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary bg-primary text-white text-center w-[45%]">
                    {$content.cta.primary}
                </Link>
                <Link
                    href="#"
                    className="text-btn rounded-lg py-4 px-8 h-20 border-2 border-solid border-primary text-primary bg-transparent text-center w-[45%]">
                    {$content.cta.secondary}
                </Link>
            </Group>
            <Image
                className="next-image cover cover--1 col-start-7 col-end-13 row-start-1 row-end-7 w-full h-full"
                src={$content.cover}
                alt={$content.cover}
                style={{
                    gridColumn: '4 / 11',
                    gridRow: '2 / 11',
                    borderRadius: '0.8rem',
                }}
            />
        </section>
    );
}

import { Icon } from '@/atoms/Icon';
import Image from 'next/image';

const $content = {
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
                            className="w-1/2 h-full"
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
                                className="w-[24%]"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.duration}
                            </span>
                        </span>
                        <span className="inline-flex flex-wrap flex-row place-content-center place-items-center gap-x-1 fill-accent-gold w-1/3">
                            <Icon
                                name="book-open"
                                scale="0.5"
                                className="w-[24%]"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.lessons}
                            </span>
                        </span>
                        <span className="inline-flex flex-wrap flex-row place-content-center place-items-center gap-x-1 fill-accent-green w-1/3">
                            <Icon
                                name="bookmark"
                                scale="0.5"
                                className="w-[24%]"
                            />
                            <span className="inline-flex flex-wrap flex-col place-content-center place-items-center">
                                {item.tag}
                            </span>
                        </span>
                    </div>

                    <div className="w-full flex flex-wrap flex-row place-content-start place-items-center">
                        <a className="rounded-full h-16 w-52 bg-transparent text-link inline-flex flex-wrap flex-row place-items-center place-content-center fill-primary text-primary border border-primary">
                            <span className="w-fit h-full inline-flex flex-wrap flex-col place-items-center place-content-center">
                                {$content.cta}
                            </span>
                            <Icon
                                name="chevron-right"
                                className="w-[15%] h-full overflow-hidden"
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

export default function Packages() {
    return (
        <section
            id="packages"
            className="flex flex-col flex-wrap place-content-center place-items-center w-screen h-[135vh] gap-y-16">
            <section className="flex flex-col flex-wrap place-items-center place-content-start w-10/12 px-4">
                <header className="flex flex-wrap flex-col place-content-center place-items-center items-start w-6/12">
                    <h2 className="text-h2">{$content.title}</h2>
                    <p className="text-paragraph text-justify text-gray w-10/12">
                        {$content.description}
                    </p>
                </header>
            </section>
            <section
                style={{ height: 'calc(135vh - 32rem)' }}
                className="flex flex-wrap flex-col place-content-center place-items-center w-full overflow-hidden">
                <section
                    className="flex flex-wrap flex-row place-content-center place-items-center w-[86%] gap-x-16 px-24"
                    id="items">
                    {$content.items.map((item) => {
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
}

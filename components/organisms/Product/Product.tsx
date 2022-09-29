import { Group, Icon, Image, Link, Text } from '@/atoms';
import { MoreButton } from '@/molecules/MoreButton';
import style from '@/styles/products.module.css';
import { ActionBar } from '../ActionBar';

export function ProductBadge({ children }: React.PropsWithChildren) {
    return (
        <span className="absolute -top-24 group-hover:top-5 left-5 inline-flex place-content-center place-items-center bg-accent text-white text-standard w-16 h-10 rounded-md z-10 transition-all opacity-0 group-hover:opacity-100">
            {children}
        </span>
    );
}

export function ProductSales({ amount, unit }: any) {
    return (
        <Group
            dir="row"
            placeContent="start"
            className="fill-gray-400 w-full">
            <Icon name="download-box" />
            <Text as="strong">
                {amount} {unit}
            </Text>
        </Group>
    );
}

export function ProductPrice({ price, old }: { price: any; old?: any }) {
    return (
        <Group
            gapx="2"
            dir="row"
            placeContent="start"
            className="w-full px-4">
            {old && (
                <Text
                    as="span"
                    size="paragraph"
                    className="text-gray-400">
                    {old}
                </Text>
            )}
            <Text
                as="strong"
                size="paragraph">
                <span className="text-accent-green">{price}</span>
            </Text>
        </Group>
    );
}

export function ProductInformation({ duration, lessons, tag }: any) {
    return (
        <Group
            dir="row"
            className="w-full">
            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                placeContent="start"
                className="fill-primary w-1/3">
                <Icon
                    name="alarm"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text
                    placeContent="center"
                    className="inline-flex">
                    {duration}
                </Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-gold w-1/3">
                <Icon
                    name="book-open"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text placeContent="center">{lessons}</Text>
            </Group>

            <Group
                gapx="1"
                type="in-flex"
                dir="row"
                className="fill-accent-green w-1/3">
                <Icon
                    name="bookmark"
                    scale="0.5"
                    className="w-[24%]"
                />
                <Text placeContent="center">{tag}</Text>
            </Group>
        </Group>
    );
}

export function ProductDetails({ sale, price, lessons, duration, tag }: any) {
    return (
        <Group
            gapy="2"
            placeContent="start"
            className="w-full order-3">
            <ProductSales
                amount={sale.amount}
                unit={sale.unit}
            />

            <ProductPrice
                price={price.new}
                old={price.old}
            />

            <ProductInformation
                duration={duration}
                lessons={lessons}
                tag={tag}
            />

            <Group
                dir="row"
                placeContent="start"
                className="w-full">
                <MoreButton outline />
            </Group>
        </Group>
    );
}

export function ProductContent({ description, department, title, stars }: any) {
    return (
        <Group
            gapy="1"
            className="order-2 w-full">
            <header className="relative flex flex-wrap flex-col place-content-center place-items-center items-start w-full gap-y-2 px-4 mt-4">
                <Text
                    as="h5"
                    color="secondary"
                    className="order-2">
                    {title}
                </Text>
                <Link
                    href="#department"
                    className="order-1 text-link">
                    {department}
                </Link>
                <Text
                    as="p"
                    className="order-4">
                    {description}
                </Text>
                <Group
                    pos="absolute"
                    type="in-flex"
                    className="bg-black fill-accent-gold w-20 h-10 content-start rounded-full top-1 right-4">
                    <Icon
                        className="w-1/2 h-full"
                        name="star-fill"
                        scale="0.5"
                    />
                    <Text
                        color="white"
                        placeContent="center"
                        className="h-full inline-flex">
                        {stars}
                    </Text>
                </Group>
            </header>
        </Group>
    );
}

export function ProductCover({ cover }: any) {
    return (
        <Group
            pos="relative"
            className="order-1 w-full h-5/12 overflow-hidden">
            <Image
                className="next-image w-full h-full group-hover:blur-sm"
                alt="image-cover-1"
                src={cover}
                imageClassName={style.productCoverImage}
            />
            <ActionBar productId={cover} />
        </Group>
    );
}

export function ProductItem({ item }: { item: any }) {
    return (
        <Group
            pos="relative"
            className="w-[30%] group">
            <Link
                overlay
                href="#product-1"
            />
            <ProductContent
                stars={item.stars}
                title={item.title}
                description={item.description}
                department={item.department}
            />
            <ProductDetails
                sale={item.sale}
                price={item.price}
                lessons={item.lessons}
                duration={item.duration}
                tag={item.tag}
            />
            <ProductCover cover={item.cover} />
            <ProductBadge>{item.badge}</ProductBadge>
        </Group>
    );
}

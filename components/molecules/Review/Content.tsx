import { Text } from '@/atoms';

export function Content({ review }: any) {
    return (
        <Text
            as="p"
            className="order-2 px-24">
            {review}
        </Text>
    );
}

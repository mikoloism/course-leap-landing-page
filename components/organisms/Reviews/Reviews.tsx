import { Group } from '@/atoms';
import {
    Content,
    Review,
    Stars,
    UserAvatar,
    UserDetails,
    UserInfo,
    Username,
    UserRole,
} from '@/molecules/Review';

function useFakeFetch() {
    return {
        data: [
            {
                username: 'Regina Miles',
                link: '@username_in_twitter_or_github',
                role: 'Designer',
                review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
                avatar: '/image-1.png',
                stars: 4,
            },
            {
                username: 'Fannie Lockean',
                link: '@username_in_twitter_or_github',
                role: 'Designer',
                review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
                avatar: '/image-1.png',
                stars: 5,
            },
            {
                username: 'Bryan Howe',
                link: '@username_in_twitter_or_github',
                role: 'Designer',
                review: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
                avatar: '/image-1.png',
                stars: 3,
            },
        ],
        error: undefined,
    };
}

export function Reviews() {
    const { data } = useFakeFetch();
    return (
        <Group
            gapx="6"
            className="w-10/12"
            style={{ height: 'calc(100% - 45rem)' }}>
            {data.map((item, index) => {
                return (
                    <Review key={`${item.username}-${index}`}>
                        <UserDetails>
                            <UserAvatar avatar={item.avatar} />
                            <UserInfo>
                                <Username username={item.username} />
                                <UserRole role={item.role} />
                            </UserInfo>
                        </UserDetails>
                        <Stars stars={item.stars} />
                        <Content review={item.review} />
                    </Review>
                );
            })}
        </Group>
    );
}

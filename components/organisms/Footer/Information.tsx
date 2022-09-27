import { useContent } from '@/libs/hooks';
import { NavigationContainer } from './NavigationContainer';

export function Information() {
    const { content } = useContent('landing-page', 'footer_information');
    const items = [
        { text: content('about_us') },
        { text: content('carrier') },
        { text: content('hiring') },
        { text: content('blog') },
    ];

    return (
        <NavigationContainer
            title={content('title')}
            navigation={items}
        />
    );
}

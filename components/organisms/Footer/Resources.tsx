import { useContent } from '@/libs/hooks';
import { NavigationContainer } from './NavigationContainer';

export function Resources() {
    const { content } = useContent('landing-page', 'footer_resources');
    const items = [
        { text: content('ios_android') },
        { text: content('watch_demo') },
        { text: content('customers') },
        { text: content('api') },
    ];

    return (
        <NavigationContainer
            title={content('title')}
            navigation={items}
        />
    );
}

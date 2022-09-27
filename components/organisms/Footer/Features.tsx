import { useContent } from '@/libs/hooks';
import { NavigationContainer } from './NavigationContainer';

export function Features() {
    const { content } = useContent('landing-page', 'footer_features');
    const items = [
        { text: content('business_marketing') },
        { text: content('user_analytic') },
        { text: content('live_chat') },
        { text: content('unlimited_support') },
    ];

    return (
        <NavigationContainer
            title={content('title')}
            navigation={items}
        />
    );
}

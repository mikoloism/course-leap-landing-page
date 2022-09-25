import { useContent } from '@/libs/hooks';
import { Header } from '@/molecules/Header';

export function FeedbacksHeader() {
    const { content } = useContent('landing-page', 'feedbacks');
    return (
        <Header
            level="h2"
            title={content('title')}
            description={content('description')}
            color="white"
            width="8"
            className="place-self-start px-20"
        />
    );
}

import LandingPageTemplate from '@/templates/LandingPage';

export default function LandingPage() {
    return <LandingPageTemplate />;
}

export async function getStaticProps() {
    return { props: {} };
}

import { Component } from '@/libs/common';
import Achievements from '@/layouts/Achievements';
import Feedbacks from '@/layouts/Feedbacks';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Hero from '@/layouts/Hero';
import Packages from '@/layouts/Packages';
import Subscribe from '@/layouts/Subscribe';
import Summary from '@/layouts/Summary';
import type { LandingPageProps } from './types';

export default class LandingPageTemplate extends Component<LandingPageProps> {
    constructor(props: LandingPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <>
                <Header />
                <Hero />
                <Achievements />
                <Summary />
                <Packages />
                <Feedbacks />
                <Subscribe />
                <Footer />
            </>
        );
    }
}

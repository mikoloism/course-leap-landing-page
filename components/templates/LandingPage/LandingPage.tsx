import { Component } from '@/libs/common';
import Features from '@/organisms/Features';
import Feedbacks from '@/organisms/Feedbacks';
import Footer from '@/organisms/Footer';
import Header from '@/organisms/Header';
import Hero from '@/organisms/Hero';
import Packages from '@/organisms/Packages';
import Subscribe from '@/organisms/Subscribe';
import Summary from '@/organisms/Summary';
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
                <Features />
                <Summary />
                <Packages />
                <Feedbacks />
                <Subscribe />
                <Footer />
            </>
        );
    }
}

import { Component } from '@/libs/common';
import { LandingPageProps } from './types';
import Header from '@/organisms/Header';
import Hero from '@/organisms/Hero';
import Summary from '@/organisms/Summary';
import Features from '@/organisms/Features';
import Packages from '@/organisms/Packages';
import Feedbacks from '@/organisms/Feedbacks';
import Subscribe from '@/organisms/Subscribe';
import Footer from '@/organisms/Footer';

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

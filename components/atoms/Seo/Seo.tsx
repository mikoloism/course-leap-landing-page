import Head from 'next/head';
import { FaviconComponent } from './Favicon';
import { KeywordsComponent } from './Keywords';
import { TitleComponent } from './Title';
import { ViewportComponent } from './Viewport';

export function SeoComponent() {
    return (
        <Head>
            <ViewportComponent />
            <TitleComponent />
            <KeywordsComponent />
            <OtherComponent />
            <FaviconComponent />
        </Head>
    );
}

function OtherComponent() {
    return (
        <>
            <meta
                name="subject"
                content="web development and front-end portfolio"
            />
            <meta
                name="revised"
                content="Wednesday October 19th 2022 02:c55 pm"
            />
        </>
    );
}

import {
    SearchEngineOptimization,
    DOCUMENT_TITLE,
} from '@/components/atoms/Seo';
import '@/libs/normalize.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function AppRenderer({ Component: PageComponent, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{DOCUMENT_TITLE}</title>
                <SearchEngineOptimization />
            </Head>
            <PageComponent {...pageProps} />
        </>
    );
}

export default AppRenderer;

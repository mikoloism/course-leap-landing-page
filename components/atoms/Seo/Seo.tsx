import { FaviconComponent } from './Favicon';
import { KeywordsComponent } from './Keywords';
import { TitleComponent } from './Title';
import { ViewportComponent } from './Viewport';

export function SeoComponent() {
    return (
        <>
            <ViewportComponent />
            <TitleComponent />
            <KeywordsComponent />
            <OtherComponent />
            <FaviconComponent />
        </>
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
                content="Wednesday October 19th 2022 04:55 pm"
            />
        </>
    );
}

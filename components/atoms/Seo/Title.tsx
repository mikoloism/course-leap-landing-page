// NOTE : recommended `name` attribute instead `property` attribute in meta tag

export const DOCUMENT_TITLE =
    // NOTE : title length must be less than 50 character (current = 80)
    // NOTE : pattern to write title should be `primary title - secondary title | brand`
    // HINT : to reduce the title length can remove the `secondary title`
    'Course Leap Landing page - Template by (Next, Typescript & Tailwind) | MIKOLOISM';

export const DOCUMENT_DESCRIPTION =
    // NOTE : description length must be less than 150 character (current = 150)
    "Course Leap landing page is a ready to use template based on 'next', 'typescript' & 'tailwind'. developed by 'mikoloism' and designed by figmaland.com";

export function TitleComponent() {
    return (
        <>
            <PrimaryComponent />
            <OpenGraphComponent />
            <TwitterComponent />
        </>
    );
}

function PrimaryComponent() {
    return (
        <>
            <meta
                name="title"
                content={DOCUMENT_TITLE}
            />
            <meta
                name="description"
                content={DOCUMENT_DESCRIPTION}
                key="desc"
            />
            <meta
                name="author"
                content="mikoloism, mikoloism@gmail.com"
            />
            <meta
                name="designer"
                content="figmaland.com"
            />
        </>
    );
}

function OpenGraphComponent() {
    return (
        <>
            <meta
                property="og:type"
                content="website"
            />
            <meta
                name="og:site_name"
                content="mikoloism.github.io"
            />
            <meta
                property="og:url"
                content="https://mikoloism.github.io/course-leap-landing-page/"
            />
            <meta
                name="og:title"
                content={DOCUMENT_TITLE}
            />
            <meta
                name="og:description"
                content={DOCUMENT_DESCRIPTION}
            />
            <meta
                name="og:email"
                content="mikoloism@gmail.com"
            />
            <meta
                name="og:image"
                content="https://mikoloism.github.io/course-leap-landing-page/cover.png"
            />
        </>
    );
}

function TwitterComponent() {
    return (
        <>
            <meta
                property="twitter:card"
                content="summary_large_image"
            />
            <meta
                property="twitter:url"
                content="https://mikoloism.github.io/course-leap-landing-page/"
            />
            <meta
                property="twitter:title"
                content={DOCUMENT_TITLE}
            />
            <meta
                property="twitter:description"
                content={DOCUMENT_DESCRIPTION}
            />
            <meta
                property="twitter:image"
                content="https://mikoloism.github.io/course-leap-landing-page/cover.png"
            />
        </>
    );
}

/**
function SchemaComComponent() {
    return (
        <>
            <meta
                property="schema:name"
                content={DOCUMENT_TITLE}
            />
            <meta
                property="schema:description"
                content={DOCUMENT_DESCRIPTION}
            />
        </>
    );
}
*/

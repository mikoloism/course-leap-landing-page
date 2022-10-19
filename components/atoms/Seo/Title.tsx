export const DOCUMENT_TITLE =
    'Course Leap - Landing page template by (Next, Typescript & Tailwind) | MIKOLOISM';

export function TitleComponent() {
    return (
        <>
            <StandardComponent />
            <OpenGraphComponent />
            <TwitterComponent />
        </>
    );
}

function StandardComponent() {
    return (
        <>
            <meta
                name="title"
                content={DOCUMENT_TITLE}
            />
            <meta
                name="description"
                content="Course Leap landing page is a ready to use template based on 'next', 'typescript' & 'tailwind'. developed by 'mikoloism' and designed by figmaland.com"
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
                name="og:site_name"
                content="mikoloism.github.io"
            />
            <meta
                name="og:title"
                content={DOCUMENT_TITLE}
            />
            <meta
                name="og:description"
                content="Course Leap landing page is a ready to use template based on 'next', 'typescript' & 'tailwind'. developed by 'mikoloism' and designed by figmaland.com"
            />
            <meta
                name="og:email"
                content="mikoloism@gmail.com"
            />
            <meta
                name="og:image"
                content="/course-leap-landing-page/cover.png"
            />
        </>
    );
}

function TwitterComponent() {
    return (
        <>
            <meta
                property="twitter:url"
                content="https://mikoloism.github.io/course-leap-landing-page"
            />
            <meta
                property="twitter:title"
                content={DOCUMENT_TITLE}
            />
            <meta
                property="twitter:description"
                content="Course Leap landing page is a ready to use template based on 'next', 'typescript' & 'tailwind'. developed by 'mikoloism' and designed by figmaland.com"
            />
            <meta
                property="twitter:image"
                content="/course-leap-landing-page/cover.png"
            />
            <meta
                property="twitter:card"
                content="summary_large_image"
            />
        </>
    );
}
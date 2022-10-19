export function FaviconComponent() {
    return (
        <>
            <AppleToucheIcons />
            <StandardIcons />
            <MSIcons />
            <Manifests />
            <ThemeColor />
        </>
    );
}

function AppleToucheIcons() {
    return (
        <>
            <meta
                name="apple-mobile-web-app-capable"
                content="yes"
            />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/course-leap-landing-page/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/course-leap-landing-page/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/course-leap-landing-page/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/course-leap-landing-page/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/course-leap-landing-page/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/course-leap-landing-page/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/course-leap-landing-page/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/course-leap-landing-page/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/course-leap-landing-page/apple-icon-180x180.png"
            />
        </>
    );
}

function StandardIcons() {
    return (
        <>
            {' '}
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/course-leap-landing-page/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/course-leap-landing-page/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/course-leap-landing-page/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/course-leap-landing-page/favicon-16x16.png"
            />
            <link
                rel="mask-icon"
                href="/course-leap-landing-page/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <link
                rel="shortcut icon"
                href="/course-leap-landing-page/favicon.ico"
                type="image/x-icon"
            />
        </>
    );
}

function MSIcons() {
    return (
        <>
            <meta
                name="msapplication-config"
                content="/course-leap-landing-page/browserconfig.xml"
            />
            <meta
                name="msapplication-TileColor"
                content="#ffffff"
            />
            <meta
                name="msapplication-TileImage"
                content="/course-leap-landing-page/ms-icon-144x144.png"
            />
        </>
    );
}

function Manifests() {
    return (
        <>
            <link
                rel="manifest"
                href="/course-leap-landing-page/site.webmanifest"
            />
            <link
                rel="manifest"
                href="/course-leap-landing-page/manifest.json"
            />
        </>
    );
}

function ThemeColor() {
    return (
        <meta
            name="theme-color"
            content="#ffffff"
        />
    );
}

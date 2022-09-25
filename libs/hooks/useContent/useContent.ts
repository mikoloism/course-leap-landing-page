type LanguageType = 'en' | 'pr' | 'fa' | 'ru';

type UseContentReturn = {
    getLanguage(): LanguageType;
    content<T extends any = string>(text: string): T;
};

type UseContentOptions = {
    page: string;
    section: string;
    lang?: LanguageType;
};

const defaultLanguage: LanguageType = 'en' as const;

function getProperty(section: string | undefined, text: string, from: any) {
    return from[`${section}_${text}`];
}

function requireJson(path: string) {
    return require(`../../../locales/${path}.json`);
}

function useContent(options: UseContentOptions): UseContentReturn;
function useContent(
    page: string,
    section: string,
    lang?: LanguageType
): UseContentReturn;
function useContent(
    pageOrOptions: UseContentOptions | string,
    section?: string,
    lang?: LanguageType
): UseContentReturn {
    lang ??= defaultLanguage;
    section ??= (pageOrOptions as UseContentOptions).section;

    let pageContent = requireJson(
        `${lang}/${
            typeof pageOrOptions === 'string'
                ? pageOrOptions
                : pageOrOptions.page
        }`
    );

    return {
        getLanguage(): LanguageType {
            return lang as LanguageType;
        },

        content<T extends any = string>(text: string): T {
            return (getProperty(section, text, pageContent) ??
                `${section}_${text}`) as T;
        },
    };
}

export { useContent };

const common = ['center', 'start', 'end'];
const content = ['between', 'around', 'evenly'].concat(common);
const items = ['baseline'].concat(common);

function createPlace(prefix: string, values: string[]) {
    return values.reduce(function (prev, curr) {
        return Object.assign(prev, { [curr]: `place-${prefix}-${curr}` });
    }, {});
}

export const PLACE_CONTENT: Record<string, string> = createPlace(
    'content',
    content
);
export function getPlaceContent(
    content?: string,
    defaultContent: string = 'start'
): string {
    return PLACE_CONTENT[content || defaultContent];
}

export const PLACE_ITEMS: Record<string, string> = createPlace('items', items);
export function getPlaceItems(
    items?: string,
    defaultContent: string = 'start'
): string {
    return PLACE_ITEMS[items || defaultContent];
}

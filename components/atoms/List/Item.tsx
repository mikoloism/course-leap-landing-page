// @as HOC
export function Item<Props = any>(
    ItemComponent: any,
    className?: string | undefined
) {
    return function ItemProvider(props: Props) {
        return (
            <li className={className}>
                <ItemComponent {...props} />
            </li>
        );
    };
}

// @as Component
export function ListItem<Props = any>(props: Props & { children: any }) {
    const { children, ...$props } = props;

    return <li {...$props}>{children}</li>;
}

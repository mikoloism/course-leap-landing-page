/** ``` tsx
 * Item(MyComponent, className)
 * ``` */
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

/** ``` tsx
 * <ListItem props><MyComponent /></ListItem>
 * ``` */
export function ListItem<Props = any>(props: React.PropsWithChildren<Props>) {
    const { children, ...$props } = props;

    return <li {...$props}>{children}</li>;
}

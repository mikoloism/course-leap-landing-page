export module TextElement {
    //* NOTE : Text.Element == Text.ElementType => which type have the <Text /> component

    export type HeadingKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    export type TextKeys = 'span' | 'strong' | 'em' | 'p';

    export type Keys = HeadingKeys | TextKeys;

    export type Props = {
        // ElementProps = {as} keyword in props/attributes
        as?: Keys;
    };

    export const DEFAULT_ELEMENT = <const>'span';
}

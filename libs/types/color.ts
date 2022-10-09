export namespace Color {
    export type Names =
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'gray'
        | 'white'
        | 'black';

    export type Props = {
        color?: Names;
    };
}

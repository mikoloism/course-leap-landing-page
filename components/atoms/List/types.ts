type KeyCallbackType<T> = (item: DataType<T>, index: number) => string | number;

// special-react-props (aliased `key`)
export type KeyType<T> =
    | string
    | number
    | Array<string | number>
    | KeyCallbackType<T>;

export interface KeyProps<T> {
    $key?: KeyType<T>;
}

export type DataType<T extends Record<keyof T, any>> = {
    [key in keyof T]: T[key];
};

export type DataProps<T> = {
    data: Array<DataType<T>>;
};

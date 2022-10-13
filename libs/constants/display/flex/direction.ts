import type * as Direction from '../../direction';
import * as Row from './direction-row';
import * as Column from './direction-column';

export type Keys = Direction.Keys;

export type ClassName = Row.ClassName | Column.ClassName;

export const DEFAULT_KEY: Keys = 'col';

export const DEFAULT_CLASSNAME: ClassName = 'flex-col';

export function isValidKey(value: string | undefined): value is Keys {
    return (
        Row.isValidKey(value as Row.Keys) ||
        Column.isValidKey(value as Column.Keys)
    );
}

export function createClassName(direction: Keys = DEFAULT_KEY): ClassName {
    if (Row.isValidKey(direction)) return Row.createClassName(direction);
    if (Column.isValidKey(direction)) return Column.createClassName(direction);
    return DEFAULT_CLASSNAME;
}

export class StyleFactory {
    protected DEFAULT_KEY: Keys = DEFAULT_KEY;
    protected DEFAULT_CLASSNAME: ClassName = DEFAULT_CLASSNAME;

    public constructor(private type: Keys) {}

    public createClassName(): ClassName {
        return createClassName(this.type);
    }
}

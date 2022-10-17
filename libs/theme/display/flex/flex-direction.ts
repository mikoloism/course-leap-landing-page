import type { DirectionKeys } from '../../direction';
import * as Row from './direction-row';
import * as Column from './direction-column';

export type ClassName = Row.ClassName | Column.ClassName;

export const DEFAULT_KEY: Column.Keys = 'col';

export const DEFAULT_CLASSNAME: ClassName = 'flex-col';

export function isValidKey(value: string | undefined): value is DirectionKeys {
    return (
        Row.isValidKey(value as Row.Keys) ||
        Column.isValidKey(value as Column.Keys)
    );
}

export function createClassName(direction: DirectionKeys): ClassName {
    if (Column.isValidKey(direction)) {
        return Column.createClassName(direction);
    }

    if (Row.isValidKey(direction)) {
        return Row.createClassName(direction);
    }

    return Column.createClassName(DEFAULT_KEY);
}

export class StyleFactory {
    protected DEFAULT_KEY: DirectionKeys = DEFAULT_KEY;
    protected DEFAULT_CLASSNAME: ClassName = DEFAULT_CLASSNAME;

    public constructor(private type: DirectionKeys) {}

    public createClassName(): ClassName {
        return createClassName(this.type);
    }
}

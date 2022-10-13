import { Common } from '../../common';
import * as Direction from '../../direction';
import * as Nowrap from './nowrap';
import * as FlexDirection from './direction';

export type Keys = 'flex' | 'in-flex' | 'inline-flex';

export type TypeProps = { type?: Keys };

export type Props = TypeProps & Nowrap.Props & Direction.Props;

export type LongProps = TypeProps & Nowrap.Props & Direction.LongProps;

export type PropsWithCommon = Common.Props & Props;

export type LongPropsWithCommon = PropsWithCommon & LongProps;

export type ClassName = Omit<Keys, 'in-flex'>;

export type ConstantRecord = Record<Keys, ClassName>;

export const KEYS: Array<Keys> = ['flex', 'in-flex', 'inline-flex'];

export const CLASSNAMES: ConstantRecord = {
    flex: 'flex',
    'in-flex': 'inline-flex',
    'inline-flex': 'inline-flex',
};

export const DEFAULT_KEY: Keys = 'flex';

export function isDisplayFlex(value: string | undefined): value is Keys {
    return KEYS.indexOf(value as Keys) >= 0;
}

export function createClassName(display: Keys | undefined): ClassName {
    return CLASSNAMES[display ?? DEFAULT_KEY];
}

export const createFlexDirectionClassName = FlexDirection.createClassName;

export const createNoWrapClassName = Nowrap.createClassName;

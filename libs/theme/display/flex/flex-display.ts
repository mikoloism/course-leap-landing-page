import * as Common from '../../common';
import * as Direction from '../../direction';
import * as Nowrap from './flex-nowrap';
import * as FlexDirection from './flex-direction';

export type FlexKey = 'flex' | 'in-flex' | 'inline-flex';

export type TypeProps = { type?: FlexKey };

export type Props = TypeProps & Nowrap.Props & Direction.Props;

export type LongProps = TypeProps & Nowrap.Props & Direction.LongProps;

export type PropsWithCommon = Common.Props & Props;

export type LongPropsWithCommon = PropsWithCommon & LongProps;

export type ClassName = Omit<FlexKey, 'in-flex'>;

export type ConstantRecord = Record<FlexKey, ClassName>;

export const KEYS: Array<FlexKey> = ['flex', 'in-flex', 'inline-flex'];

export const CLASSNAMES: ConstantRecord = {
    flex: 'flex',
    'in-flex': 'inline-flex',
    'inline-flex': 'inline-flex',
};

export const DEFAULT_KEY: FlexKey = 'flex';

export function isDisplayFlex(value: string): value is FlexKey {
    return KEYS.indexOf(value as FlexKey) >= 0;
}

export function createClassName(display: FlexKey): ClassName {
    return CLASSNAMES[display];
}

export const createFlexDirectionClassName = FlexDirection.createClassName;

export const createNoWrapClassName = Nowrap.createClassName;

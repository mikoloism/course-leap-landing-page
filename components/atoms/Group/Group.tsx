import { $, Component, ReactNode } from '@/libs/common';

// flex|inline-flex
interface FlexStyleProps {
    nowrap?: boolean;
}

// grid|inline-grid
interface GridStyleProps {
    columns?: string;
    rows?: string;
}

interface StyleProps extends FlexStyleProps, GridStyleProps {
    type?: 'flex' | 'grid' | 'inline-flex' | 'inline-grid';
    dir?: string;
    pos?: 'relative' | 'absolute' | 'sticky' | 'fixed';
    gapx?: number | string;
    gapy?: number | string;
    placeContent?: 'center' | 'start' | 'end' | 'unset';
    placeItems?: 'center' | 'start' | 'end';
}

interface GroupProps extends StyleProps {
    className?: string;
    children?: ReactNode | JSX.Element;
    style?: any;
}

const GROUP_GAP_X = {
    1: 'gap-x-1',
    2: 'gap-x-2',
    3: 'gap-x-3',
    4: 'gap-x-4',
    5: 'gap-x-5',
    6: 'gap-x-6',
    7: 'gap-x-7',
    8: 'gap-x-8',
    9: 'gap-x-9',
    10: 'gap-x-10',
    12: 'gap-x-12',
    14: 'gap-x-14',
    16: 'gap-x-16',
    20: 'gap-x-20',
    32: 'gap-x-32',
} as const as any;

const GROUP_GAP_Y = {
    1: 'gap-y-1',
    2: 'gap-y-2',
    3: 'gap-y-3',
    4: 'gap-y-4',
    5: 'gap-y-5',
    6: 'gap-y-6',
    7: 'gap-y-7',
    8: 'gap-y-8',
    9: 'gap-y-9',
    10: 'gap-y-10',
    12: 'gap-y-12',
    14: 'gap-y-14',
    16: 'gap-y-16',
    20: 'gap-y-20',
    32: 'gap-y-32',
} as const as any;

const FLEX_DIRECTION = {
    // col
    col: 'flex-col',
    column: 'flex-col',
    vertical: 'flex-col',
    'col-reverse': 'flex-col-reverse',
    'column-reverse': 'flex-col-reverse',
    'vertical-reverse': 'flex-col-reverse',

    // row
    row: 'flex-row',
    horizontal: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    'hover-reverse': 'flex-row-reverse',
} as const as any;

function withFlexStyle({ dir, gapx, gapy, nowrap }: any): string {
    return $(
        FLEX_DIRECTION[dir ?? 'col'],
        gapx && GROUP_GAP_X[gapx],
        gapy && GROUP_GAP_Y[gapy],
        { 'flex-wrap': !nowrap }
    );
}

function withGridStyle({ columns, rows }: any): string {
    return $('grid-cols-' + columns, 'grid-rows-' + rows);
}

export class Group extends Component<GroupProps> {
    constructor(props: GroupProps) {
        super(props);
    }

    render() {
        const $flexProps = {
            dir: this.props.dir,
            gapx: this.props.gapx,
            gapy: this.props.gapy,
            nowrap: this.props.nowrap,
        };
        const $gridProps = {
            columns: this.props.columns,
            rows: this.props.rows,
            // gapx: this.props.gapx,
            // gapy: this.props.gapy,
        };

        const $type = this.props.type as string;
        const $className = $(
            $type
                ? {
                      flex: $type === 'flex',
                      grid: $type === 'grid',
                      'inline-flex': $type === 'inline-flex',
                      'inline-grid': $type === 'inline-grid',
                  }
                : 'flex',
            this.props.pos ?? '',
            ['grid', 'inline-grid'].includes($type)
                ? withGridStyle($gridProps)
                : withFlexStyle($flexProps),
            this.props.placeContent
                ? 'place-content-' + this.props.placeContent
                : 'place-content-center',
            this.props.placeItems
                ? 'place-items-' + this.props.placeItems
                : 'place-items-center',
            this.props.className
        );
        return (
            <section
                className={$className}
                style={this.props.style ?? {}}>
                {this.props.children}
            </section>
        );
    }
}

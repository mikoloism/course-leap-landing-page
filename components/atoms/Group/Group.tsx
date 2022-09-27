import { $, Component, PropsWithCommon, PropsWithStyle } from '@/libs/common';
import {
    ExactFlexDisplay,
    ExactGridDisplay,
    getFlexDirection,
    getFlexDisplay,
    getGapSize,
    getGridDisplay,
    getPlaceContent,
    getPlaceItems,
    getPosition,
    isFlex,
    isGrid,
} from '@/libs/constants';
import type {
    DirectionType,
    FlexType,
    GridType,
    PropsType,
} from '@/libs/types';

type Props = PropsWithCommon<PropsWithStyle<PropsType>>;

interface DisplayFlex {
    dir?: DirectionType;
    nowrap?: boolean;
}
function withDisplayFlex({ dir, nowrap }: DisplayFlex): string {
    return $(getFlexDirection(dir), { 'flex-wrap': !nowrap });
}

interface DisplayGrid {
    columns?: number | string;
    rows?: number | string;
}
function withDisplayGrid({ columns, rows }: DisplayGrid): string {
    return $('grid-cols-' + columns, 'grid-rows-' + rows);
}

function getDisplayType(
    type: GridType | FlexType
): ExactFlexDisplay | ExactGridDisplay {
    return isFlex(type)
        ? getFlexDisplay(type)
        : isGrid(type)
        ? getGridDisplay(type)
        : 'flex';
}

export class Group extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const $type = this.props.type ?? 'flex';
        const $className = $(
            getDisplayType($type),
            isFlex($type)
                ? withDisplayFlex({
                      dir: this.props.dir,
                      nowrap: (this.props as any).nowrap,
                  })
                : withDisplayGrid({
                      columns: (this.props as any).columns,
                      rows: (this.props as any).rows,
                  }),
            getGapSize({ gapx: this.props.gapx, gapy: this.props.gapy }),
            getPlaceContent(this.props.placeContent, 'center'),
            getPlaceItems(this.props.placeItems, 'center'),
            this.props.pos && getPosition(this.props.pos),
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

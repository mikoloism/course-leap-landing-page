import { $, Component, PropsWithCommon, PropsWithStyle } from '@/libs/common';
import {
    ExactFlexDisplay,
    ExactGridDisplay,
    getBackgroundColor,
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
    ColorType,
    DirectionType,
    FlexType,
    GridType,
    PropsType,
} from '@/libs/types';

function getDisplayType(
    type: GridType | FlexType
): ExactFlexDisplay | ExactGridDisplay {
    return isFlex(type)
        ? getFlexDisplay(type)
        : isGrid(type)
        ? getGridDisplay(type)
        : 'flex';
}

function withDisplayFlex({
    dir,
    nowrap,
}: {
    dir?: DirectionType;
    nowrap?: boolean;
}): string {
    return $(getFlexDirection(dir), { 'flex-wrap': !nowrap });
}

function withDisplayGrid({
    columns,
    rows,
}: {
    columns?: number | string;
    rows?: number | string;
}): string {
    return $('grid-cols-' + columns, 'grid-rows-' + rows);
}

type Props = PropsWithCommon<PropsWithStyle<PropsType>> & {
    layout?: boolean;
    color?: ColorType;
};

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
            this.props.color && getBackgroundColor(this.props.color),
            this.props.layout && 'w-screen h-screen p-0',
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

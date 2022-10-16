import type { PropsWithAll, PropsWithCommon } from '@/libs/common';
import { Component } from '@/libs/common';

type Props = PropsWithAll;

type RenderWithStyleAttribute = PropsWithAll;

type RenderWithoutStyleAttribute = PropsWithCommon;

export class GroupRender extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    private renderWithStyleAttribute(props: RenderWithStyleAttribute) {
        return (
            <section
                className={props.className}
                style={props.style}>
                {props.children}
            </section>
        );
    }

    private renderWithoutStyleAttribute(props: RenderWithoutStyleAttribute) {
        return <section className={props.className}>{props.children}</section>;
    }

    private hasStyleProps(): boolean {
        return !!this.props?.style;
    }

    public render() {
        const GroupComponent = this.hasStyleProps()
            ? this.renderWithStyleAttribute
            : this.renderWithoutStyleAttribute;

        return <GroupComponent {...this.props} />;
    }
}

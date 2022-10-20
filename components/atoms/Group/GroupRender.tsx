import type { PropsWithCommon } from '@/libs/common';
import { Component } from '@/libs/common';

type Props = PropsWithCommon;

type RenderWithoutStyleAttribute = PropsWithCommon;

export class GroupRender extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const GroupComponent = this.renderWithoutStyleAttribute;
        return <GroupComponent {...this.props} />;
    }

    private renderWithoutStyleAttribute(props: RenderWithoutStyleAttribute) {
        return <section className={props.className}>{props.children}</section>;
    }
}

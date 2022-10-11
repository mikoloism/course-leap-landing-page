import { Component, PropsWithAll } from '@/libs/common';
import { GroupRender } from './GroupRender';
import { GroupStyle, StyleProps } from './GroupStyle';

type Props = PropsWithAll<StyleProps>;

export class Group extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = this.getStyleFromClassName();

        return (
            <GroupRender
                className={className}
                style={this.props.style ?? {}}>
                {this.props.children}
            </GroupRender>
        );
    }

    private getStyleFromClassName(): string {
        const styleFromClassName = new GroupStyle<StyleProps>(this.props);

        return styleFromClassName.getClassName();
    }
}

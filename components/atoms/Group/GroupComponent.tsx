import { Component } from '@/libs/common';
import { GroupRender } from './GroupRender';
import { GroupStyleFactory } from './GroupStyle';
import type { GroupComponentProps as Props } from './type';

export class GroupComponent extends Component<Props> {
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
        const styleFromClassName = new GroupStyleFactory(this.props);

        return styleFromClassName.getClassName();
    }
}

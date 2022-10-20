import { Component } from '@/libs/common';
import { GroupRender } from './GroupRender';
import { GroupStyleFactory } from './GroupStyle';
import type { GroupComponentProps as Props } from './type';

export class GroupComponent extends Component<Props> {
    static defaultProps: Props = {
        type: 'flex',
        dir: 'col',
        nowrap: false,
        placeContent: 'center',
        placeItems: 'center',
    };

    constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = this.getStyleFromClassName();

        return (
            <GroupRender className={className}>
                {this.props.children}
            </GroupRender>
        );
    }

    private getStyleFromClassName(): string {
        const styleFromClassName = new GroupStyleFactory(this.props);

        return styleFromClassName.getClassName();
    }
}

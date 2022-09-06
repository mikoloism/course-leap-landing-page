import { Component, memo, Image as NextImage } from '@/libs/common';
import { ImageProps } from './index';

class Image extends Component<ImageProps> {
    constructor(props: ImageProps) {
        super(props);
    }

    render() {
        return (
            <figure className={this.props.className}>
                <NextImage
                    src={this.props.src}
                    layout="intrinsic"
                />
            </figure>
        );
    }
}

export default memo(Image);

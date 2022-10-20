import type { PropsWithClassName } from '@/libs/common';
import { classnames, Component, Image as NextImage } from '@/libs/common';
import style from '@/styles/image.module.css';
import { loadImage } from './image-loader';

interface ImageProps extends PropsWithClassName {
    src: string;
    alt: string;
    imageClassName?: string;
}

export class Image extends Component<ImageProps> {
    constructor(props: ImageProps) {
        super(props);
    }

    render() {
        const className = classnames(
            style['image-wrapper'],
            this.props.className
        );

        return (
            <figure className={className}>
                <NextImage
                    src={this.props.src}
                    alt={this.props.alt}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    className={this.props.imageClassName ?? ''}
                    loader={loadImage}
                    priority
                />
            </figure>
        );
    }
}

// HINT : for more performance uncomment `export default memo(Image);`

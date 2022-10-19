import type { PropsWithClassName } from '@/libs/common';
import { loadImage } from './image-loader';
import { classnames, Component, Image as NextImage } from '@/libs/common';

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
            'grid',
            'relative m-0 p-0',
            'place-content-center',
            'place-items-center',
            this.props.className
        );

        // TODO : add `full-grid` to `styles/layouts/` and import as `css module` instead `inline style`
        return (
            <figure
                className={className}
                style={{
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: 'repeat(12, 1fr)',
                }}>
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

// export default memo(Image);

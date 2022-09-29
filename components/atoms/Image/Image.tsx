import type { PropsWithClassName, PropsWithStyle } from '@/libs/common';
import { $, Component, Image as NextImage } from '@/libs/common';

interface ImageProps extends PropsWithClassName<PropsWithStyle> {
    src: string;
    alt: string;
}

export class Image extends Component<ImageProps> {
    constructor(props: ImageProps) {
        super(props);
    }

    render() {
        const $className = $(
            'grid',
            'relative m-0 p-0',
            'place-content-center',
            'place-items-center',
            this.props.className
        );

        return (
            <figure
                className={$className}
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
                    style={this.props.style ?? {}}
                    priority
                />
            </figure>
        );
    }
}

// export default memo(Image);

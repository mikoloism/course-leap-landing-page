import { Component, memo, Image as NextImage, $ } from '@/libs/common';

interface ImageProps {
    src: string;
    alt: string;
    style?: object;
    className?: string;
}

export class Image extends Component<ImageProps> {
    constructor(props: ImageProps) {
        super(props);
    }

    render() {
        const $className = $(
            'relative m-0 p-0',
            'place-content-center',
            'place-items-center',
            this.props.className
        );

        return (
            <figure
                className={$className}
                style={{
                    display: 'grid',
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

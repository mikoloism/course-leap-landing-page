interface SvgProps {
    scale?: number | string;
}

export const DEFAULT_SVG_ICON_PROPS = { scale: '0.70' };

export const withSvg = (SvgPath: any) => {
    return function SvgWrapper({ scale }: SvgProps) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className={`transform scale-[${
                    scale ?? scale ?? DEFAULT_SVG_ICON_PROPS.scale
                }]`}>
                <SvgPath />
            </svg>
        );
    };
};

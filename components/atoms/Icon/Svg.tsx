interface SvgProps {
    scale?: number | string;
}

export const DEFAULT_SVG_ICON_PROPS = { scale: 0.7 };

export const withSvg = (SvgPath: any) => {
    return function SvgWrapper({ scale }: SvgProps = DEFAULT_SVG_ICON_PROPS) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                style={{ transform: `scale(${scale})` }}>
                {/* // TODO : if (not-work) => replace with jsx format <SvgPath />  */}
                {SvgPath}
            </svg>
        );
    };
};

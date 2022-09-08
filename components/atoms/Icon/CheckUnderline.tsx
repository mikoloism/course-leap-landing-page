import type { SvgProps } from './index';

export const CheckUnderlineIcon = (
    { width, height }: SvgProps = { width: '48', height: '48' }
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}>
        <path d="M11.55 41.9q-.95 0-1.6-.65-.65-.65-.65-1.65 0-1 .65-1.625t1.6-.625h25q.95 0 1.625.625t.675 1.625q0 1-.675 1.65-.675.65-1.625.65Zm7.55-11.45q-.55 0-.95-.175-.4-.175-.7-.525l-9.2-9.15q-.65-.65-.625-1.6.025-.95.675-1.65.65-.65 1.625-.65t1.675.65l7.5 7.55L36.6 7.35q.6-.7 1.575-.7t1.675.7q.6.65.6 1.625t-.6 1.675l-19.2 19.1q-.3.35-.7.525-.4.175-.85.175Z" />
    </svg>
);
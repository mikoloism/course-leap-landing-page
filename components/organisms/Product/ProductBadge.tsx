import type { ProductBadgeProps as Props } from './types';

export function ProductBadge({ children }: Props) {
    return (
        <span className="absolute -top-24 group-hover:top-5 left-5 inline-flex place-content-center place-items-center bg-accent text-white text-standard w-16 h-10 rounded-md z-10 transition-all opacity-0 group-hover:opacity-100">
            {children}
        </span>
    );
}

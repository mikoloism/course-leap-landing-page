import { Link } from '@/atoms';

export function FooterNavigationItem({ text }: { text: string }) {
    return (
        <Link
            href={`#footer-${text.replace('#', '')}`}
            className="w-full h-full inline-flex flex-wrap flex-col place-content-start place-items-center hover:text-primary hover:font-bold hover:translate-x-3 hover:scale-110 transform transition">
            <span
                id={`footer-${text.replace('#', '')}`}
                className="hidden"
                aria-hidden></span>
            {text}
        </Link>
    );
}

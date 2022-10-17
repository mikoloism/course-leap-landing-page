import { Image } from '@/atoms';
import style from '@/styles/summary.module.css';

export function SummaryCover() {
    return (
        <Image
            className={`next-image cover col-start-7 col-end-13 row-start-1 row-end-7 w-1/2 h-full ${style.summaryCoverWrapper}`}
            src="/image-2.png"
            alt="image-cover-1"
            imageClassName={style.summaryCoverImage}
        />
    );
}

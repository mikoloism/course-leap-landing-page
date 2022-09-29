import {
    HeaderActionGroup,
    HeaderBrand,
    HeaderNavigation,
} from '@/organisms/Header';
import style from '@/styles/header.module.css';

export default function Header() {
    const $headerClassName =
        'grid grid-cols-12 grid-rows-6 place-content-center place-items-center w-screen bg-secondary text-white px-32';
    const $rowClassName = 'row-start-2 row-end-6';

    return (
        <header className={`${$headerClassName} ${style.header}`}>
            <HeaderBrand className={`col-start-1 col-end-3 ${$rowClassName}`} />
            <HeaderNavigation
                className={`col-start-4 col-end-8 ${$rowClassName}`}
            />
            <HeaderActionGroup
                className={`col-start-10 col-end-13 ${$rowClassName}`}
            />
        </header>
    );
}

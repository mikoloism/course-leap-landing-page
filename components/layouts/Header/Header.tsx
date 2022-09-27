import { $ } from '@/libs/common';
import {
    HeaderActionGroup,
    HeaderBrand,
    HeaderNavigation,
} from '@/organisms/Header';

export default function Header() {
    const $rowClassName = $('row-start-3', 'row-end-7');

    return (
        <header
            id="header"
            className="grid grid-cols-12 grid-rows-6 w-screen h-36 place-content-center place-items-center bg-secondary text-white text-center font-montserrat px-32 sticky top-0">
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

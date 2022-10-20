import { Item, List } from '@/atoms';
import { classnames } from '@/libs/common';
import style from '@/styles/footer.module.css';
import { FooterNavigationItem } from './Navigation';

export function FooterNavigation({ items }: { items: any }) {
    const className =
        'flex flex-wrap flex-col place-content-center place-items-center w-full';

    return (
        <nav className={classnames(className, style['navigation-wrapper'])}>
            <List
                gapy="6"
                className="w-full h-full"
                placeContent="start"
                data={items}
                Component={Item(
                    FooterNavigationItem,
                    classnames(className, 'h-1/4')
                )}
            />
        </nav>
    );
}

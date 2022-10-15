import { Component } from '@/libs/common';
import {
    HeaderActionGroup,
    HeaderBrand,
    HeaderNavigation,
} from '@/organisms/Header';
import style from '@/styles/header.module.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <header className={this.getClassName()}>
                <HeaderBrand
                    className={`col-start-1 col-end-3 ${this.getRowClassName()}`}
                />
                <HeaderNavigation
                    className={`col-start-4 col-end-8 ${this.getRowClassName()}`}
                />
                <HeaderActionGroup
                    className={`col-start-10 col-end-13 ${this.getRowClassName()}`}
                />
            </header>
        );
    }

    private getClassName(): string {
        return `grid grid-cols-12 grid-rows-6 place-content-center place-items-center w-screen bg-secondary text-white px-32 ${style.header}`;
    }

    private getRowClassName() {
        return 'row-start-2 row-end-6';
    }
}

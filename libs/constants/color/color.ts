import * as Background from './background';
import type { ColorNames } from './common';

export type Names = ColorNames;

export type Props = {
    color?: Names;
};

export class BackgroundStyleFactory {
    private NULL_CLASSNAME: '' = '';

    public constructor(private color: Names | undefined) {}

    public createClassName(): Background.ClassName | '' {
        return this.isPropertyExists()
            ? this.getBackground()
            : this.NULL_CLASSNAME;
    }

    private getBackground(): Background.ClassName {
        return Background.getClassName(this.color);
    }

    private isPropertyExists(): boolean {
        return !!this?.color;
    }
}

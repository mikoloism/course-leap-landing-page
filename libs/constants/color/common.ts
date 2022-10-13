import { BackgroundColor } from './background';
import { TextColor } from './text';

export module Color {
    export type Names = ColorNames;

    export type Props = {
        color?: Names;
    };

    export import Background = BackgroundColor;
    export import Text = TextColor;

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
}

export type ColorNames =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';

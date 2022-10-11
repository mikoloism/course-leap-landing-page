import { BackgroundColor } from './background';
import { TextColor } from './text';

export module Color {
    export type Names = ColorNames;

    export type Props = {
        color?: Names;
    };

    export import Background = BackgroundColor;
    export import Text = TextColor;
}

export type ColorNames =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'gray'
    | 'white'
    | 'black';

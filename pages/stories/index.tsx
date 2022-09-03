import { Component } from 'react';

export interface IStoryProps {}

export interface IStoryState {}

export default class Story extends Component<IStoryProps, IStoryState> {
    public state: IStoryState = {};

    constructor(props: IStoryProps) {
        super(props);
    }

    public render() {
        const $ = 'w-full h-full space-x-0 space-y-0';
        return (
            <iframe
                className={$}
                src="http://localhost:61000/"></iframe>
        );
    }
}

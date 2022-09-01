import { Component } from 'react';

export interface IStorybookProps {}

export interface IStorybookState {}

export default class Storybook extends Component<
    IStorybookProps,
    IStorybookState
> {
    public state: IStorybookState = {};

    constructor(props: IStorybookProps) {
        super(props);
    }

    public render() {
        return <h1>Hi, This Page under WIP.</h1>;
    }
}

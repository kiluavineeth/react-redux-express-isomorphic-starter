import * as React from 'react';

interface IHome {
    counter: number;
    increaseCount: () => void;
}

export class Home extends React.Component<IHome, any> {
    public render() {
        return (
            <div>
                <div>Home page</div>
                <button onClick={() => this.props.increaseCount()} >Counter</button>
                <div>{this.props.counter}</div>
            </div>
        );
    }
}
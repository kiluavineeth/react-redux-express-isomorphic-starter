import * as React from 'react';
import { Header } from './header';

export class App extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
import * as React from 'react';
let Link = require('react-router').Link;

export class Header extends React.Component<any, any> {
    public render() {
        return (
            <nav>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
            </nav>
        );
    }
}

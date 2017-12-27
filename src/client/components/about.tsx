import * as React from 'react';

interface IAbout {
    firstName: string;
    lastName: string;
    email: string;
    updateUserData: (firstName: string, lastName: string, email: string) => void;
}

export class About extends React.Component<IAbout, any> {
    public render() {
        return (
            <div>
                <div>About Page</div>
                <div>{this.props.firstName}</div>
                <div>{this.props.lastName}</div>
                <div>{this.props.email}</div>
                <button onClick={() => this.props.updateUserData('naruto', 'uzumaki', 'a@b.com')}>Update user data</button>
            </div>
        );
    }
}
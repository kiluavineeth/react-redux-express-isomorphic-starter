import * as React from 'react';
let { connect } = require('react-redux');
import { About as AboutComponent } from '../components/about';
import { createUserDataAction } from '../redux/actions';
import { IState } from 'client/redux/state';

const mapStateToProps = (state: IState, ownProps: any) => {
    return {
        firstName: state.users.firstName,
        lastName: state.users.lastName,
        email: state.users.email
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        updateUserData: (firstName: string, lastName: string, email: string) => {
            dispatch(createUserDataAction({ firstName, lastName, email }));
        }
    }
};

const About = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutComponent);

export default About; 
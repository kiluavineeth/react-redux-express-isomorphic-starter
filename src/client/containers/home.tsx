import * as React from 'react';
let { connect } = require('react-redux');
import { Home as HomeComponent } from '../components/home';
import { createMockDataAction } from '../redux/actions';
import { IState } from 'client/redux/state';

const mapStateToProps = (state: IState, ownProps: any) => {
    return {
        counter: state.mockData.counter
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        increaseCount: () => {
            dispatch(createMockDataAction({}));
        }
    }
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default Home;
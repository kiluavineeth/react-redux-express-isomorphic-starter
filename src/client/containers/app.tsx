import * as React from 'react';
let { connect } = require('react-redux');
import { App as AppComponent } from '../components/app';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        fullState: state
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {

};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App; 
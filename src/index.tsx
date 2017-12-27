import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

let { Router, browserHistory } = require('react-router');
import routes from './client/routes';

import { setupStore } from './client/redux/store'

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
import 'core-js/fn/object/assign';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes.js';

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import Teachers from './teachers/containers/Page';
import Positions from './teacherPositions/containers/Page';


document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('content'),
        history = syncHistoryWithStore(browserHistory, store);

    ReactDOM.render(
        <Provider store = {store}>
            <Router history = {history}>
            <Route path="/" component={App}>
                <Route path="teacher" component={Teachers}/>
                <Route path="position" component={Positions}/>
            </Route>
            </Router>
        </Provider>, el
    );

    store.subscribe(() => console.log(store.getState()));
});

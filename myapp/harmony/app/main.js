import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import Teachers from './teachers/containers/Page';
import Positions from './teacherPositions/containers/Page';


document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('content');

    ReactDOM.render(
        <Provider store = {store}>
            <App/>
        </Provider>, el
    );

    store.subscribe(() => console.log(store.getState()));
});

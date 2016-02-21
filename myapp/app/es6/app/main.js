import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';


document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('content');

    ReactDOM.render(
        <Provider store = {store}>
            <App/>
        </Provider>, el
    );
    injectTapEventPlugin();
    store.subscribe(() => console.log(store.getState()));
});

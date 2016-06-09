import React from 'react';
import App from './app/containers/AppContainer';
import LogIn from './login/containers/LogInContainer';

export default ({
    user
}) => (
    user.id ? <App/> : <LogIn/>
);
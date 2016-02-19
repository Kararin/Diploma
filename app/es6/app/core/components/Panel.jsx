import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';

export default ({
    title,
    children
}) => (
    <Paper className = 'panel'>
        <AppBar title = {title}>
    {/*TODO Make it resiasable*/}
        </AppBar>
            {children}
    </Paper>
)
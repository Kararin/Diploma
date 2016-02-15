import React from 'react';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Toolbar from 'material-ui/lib/toolbar/toolbar';

export default ({
    teachers
}) => {
    return (
        <Paper style = {{
            width: 400,
            float: 'left',
            padding: 10,
            margin: 10
        }}>
            <Toolbar>
                <ToolbarTitle text = "Teachers:"/>
            </Toolbar>
            <List>
                {teachers.map( teacher => <ListItem
                                            key = {teacher.id}
                                            primaryText = {teacher.name}>
                                        </ListItem>)}
            </List>
        </Paper>
    );
};
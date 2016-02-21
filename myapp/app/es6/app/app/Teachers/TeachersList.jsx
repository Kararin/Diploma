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
        <List>
            {teachers.map( teacher => <ListItem
                                        key = {teacher.id}
                                        primaryText = {teacher.fullName}>
                                    </ListItem>)}
        </List>
    );
};
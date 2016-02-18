import React from 'react';
import Paper from 'material-ui/lib/paper';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import RaisedButton from 'material-ui/lib/raised-button';
import Input from 'components/Input';

let AddTeacher =  ({onAdd}) => {
    let firstName,
        lastName,
        position,
        style = {
            width: 400,
            float: 'left',
            padding: 10,
            margin: 10
        };

    return (
        <Paper style = {style}>
            <Toolbar>
                <ToolbarTitle
                    text = "New teacher"/>
            </Toolbar>
                <div>
                    <Input
                        hint = 'Last Name'
                        ref = {node => lastName = node}/>
                    <Input
                        hint = 'First Name'
                        ref = {node => firstName = node}/>
                    <Input
                        hint = 'Position'
                        ref = {node => position = node}/>
                </div>
            <div>
                <RaisedButton
                        label = "Add"
                        secondary = {true}
                        onClick = {() => {
                            onAdd({
                                lastName: lastName.value,
                                firstName: firstName.value,
                                position: position.value
                            });

                            lastName.value = '';
                            firstName.value = '';
                            position.value = '';
                        }}
                />
            </div>
        </Paper>
    );
};

export default AddTeacher;
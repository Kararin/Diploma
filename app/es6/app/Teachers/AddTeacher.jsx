import React from 'react';
import {addTeacher} from '../actions/teachers';
import {connect} from 'react-redux';
import Paper from 'material-ui/lib/paper';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

let AddTeacher =  ({dispatch}) => {
    let input = '',
        style = {
            height: 200,
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
                <div className="mdl-textfield mdl-js-textfield">
                    <input
                        className="mdl-textfield__input"
                        type="text"
                        id="sample1"
                        ref = {(node) => {input = node}}/>
                    <label className="mdl-textfield__label" htmlFor="sample1">Name...</label>
                </div>
            <div>
                <RaisedButton
                        label = "Add"
                        secondary = {true}
                        onClick = {() => {
                            dispatch(addTeacher(input.value));
                            input.value = '';
                        }}
                />
            </div>
        </Paper>
    );
};

AddTeacher = connect()(AddTeacher);

export default AddTeacher;
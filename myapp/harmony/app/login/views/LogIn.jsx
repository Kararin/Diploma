import React from 'react';
import {Input, Button} from 'react-bootstrap';

//todo: styling
export default class LogIn extends React.Component {
    render() {
        var name,
            pass;
        return (
            <div>
                <Input
                    type = 'text'
                    label = 'Name'
                    placeholder = 'Enter Name'
                    ref = {c => {name = c}}/>
                <Input
                    type = 'text'
                    placeholder = 'Enter Password'
                    label = 'Password'
                    ref = {c => {pass = c}}/>
                <Button onClick = {e => {
                    this.onOkClick(name.getInputDOMNode().value, pass.getInputDOMNode().value)}}>
                    LogIn
                </Button>
            </div>
        )
    }

    onOkClick(name, password) {
        if (this.validateData(name, password)) {
            this.props.onLogInClick(name, password);
        } else {
            //todo: validate input
            console.log('invalid data');
        }
    }

    validateData(name, pass) {
        return name && pass;
    }
};

LogIn.defaultProps = {
    onLogInClick: console.log('onLogInClick not implemented')
};
import React from 'react';
import {Input, Button} from 'react-bootstrap';
import Page from '../../core/components/Page';
import TR from '../../translate/translate';

//todo: styling
export default class LogIn extends React.Component {
    render() {
        var name,
            pass,
            {lang} = this.props;

        return (
            <Page
                title = {TR(lang, 'LOG_IN')}
                className = 'login'>
                <Input
                    type = 'text'
                    label = {TR(lang, 'NAME')}
                    placeholder = {TR(lang, 'ENTER_NAME')}
                    ref = {c => {name = c}}/>
                <Input
                    type = 'text'
                    placeholder = {TR(lang, 'ENTER_PASSWORD')}
                    label = {TR(lang, 'PASSWORD')}
                    ref = {c => {pass = c}}/>

                <Button onClick = {e => {
                    this.onOkClick(name.getInputDOMNode().value, pass.getInputDOMNode().value)}}>
                    {TR(lang, 'LOG_IN')}
                </Button>
            </Page>
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
    lang: null,
    onLogInClick: console.log('onLogInClick not implemented')
};
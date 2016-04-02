import React, {PropTypes} from 'react';
import {Panel, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

class Page extends React.Component {
    render() {
        var {
                bsStyle,
                title,
                children
            } = this.props,
            buttons = this.getButtons();

        return (
            <Panel
                bsStyle = {bsStyle}
                header = {title}>
                <ButtonGroup>
                    {buttons}
                </ButtonGroup>
                {children}
            </Panel>
        );
    }

    getButtons () {
        var {isAdd, onAdd} = this.props,
            buttons = [];

        isAdd && (buttons.push(
            <Button
                bsSize = "large"
                key = "add"
                onClick= {() => onAdd()}>
                <Glyphicon
                    glyph="plus-sign"
                />
            </Button>
        ));

        return buttons;
    }
}

Page.defaultProps = {
  buttons: {
    isAdd: true
  },
  bsStyle: 'primary',
  actions: {
    onAdd: () => console.log('not implemented')
  },
  title: ''
}

export default Page;

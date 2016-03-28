import React, {PropTypes} from 'react';
import {Panel, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

const Page = ({
    children,
    bsStyle,
    title
}) => {
    return (
        <Panel
            bsStyle = {bsStyle}
            header = {title}>
            <ButtonGroup>
                <Button bsSize="large">
                    <Glyphicon
                        glyph="plus-sign"
                        />
                </Button>
            </ButtonGroup
           >
            {children}
        </Panel>
    );
};

Page.defaultProps = {
  buttons: {
    isAdd: false
  },
  bsStyle: 'primary',
  actions: {
    onAdd: () => console.log('not implemented')
  },
  title: ''
}

export default Page;

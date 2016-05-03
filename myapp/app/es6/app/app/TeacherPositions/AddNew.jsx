import React from 'react';
import {
    Button,
    Input,
    Modal} from 'react-bootstrap';

export default class AddNew extends React.Component {
    render() {
        var name = null,
            shortName = null,
            {onAdd, onClose, isVisible} = this.props;

        return (
            <div className="static-modal">
                <Modal show = {isVisible}>
                <Modal.Header>
                    <Modal.Title>
                        Add new position
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Input
                        type = "text"
                        placeholder = "Enter text"
                        label = "Name"
                        ref = {(c) => {name = c;}}
                        onChange = {e => this.changeShortName(e.target.value, shortName)} />
                    <Input
                        type = "text"
                        placeholder = "Enter text"
                        label = "Short name"
                        ref = {(c) => {shortName = c;}}
                        />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick = {() => {onClose()}}>
                        Close
                    </Button>
                    <Button
                        bsStyle="primary"
                        onClick = {() => {
                            onAdd({name: name.getValue(), shortName: shortName.getValue()});
                        }}>
                        Ok
                    </Button>
                </Modal.Footer>

                </Modal>
            </div>
        );
    }

    changeShortName(name, shortName) {
        var value = this.getDefaultShortName(name);

        shortName.getInputDOMNode().value = value;
    }

    getDefaultShortName(name) {
        var shortPositionNameSymbols = 3;

        return `${name.slice(0, shortPositionNameSymbols)}.`;
    }
}

AddNew.defaultProps = {
    onAdd: () => console.log(' onAdd not implemented yet'),
    onClose: () => console.log(' onClose not implemented yet'),
    isVisible: false
};

AddNew.propTypes = {
    onAdd: React.PropTypes.func,
    onClose: React.PropTypes.func,
    isVisible: React.PropTypes.bool
};
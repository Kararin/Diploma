import React from 'react';
import {
    Button,
    Input,
    Modal} from 'react-bootstrap';

const AddNew = ({
    onAdd,
    onClose,
    isVisible
}) => {
    var name = null,
        shortName = null;
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
                    ref = {(c) => {name = c;}} />
                <Input
                    type = "text"
                    placeholder = "Enter text"
                    label = "Short name"
                    ref = {(c) => {shortName = c;}}/>
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

export default AddNew;
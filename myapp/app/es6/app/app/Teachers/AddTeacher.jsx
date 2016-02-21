import React from 'react';
import {Modal, Input, Button} from 'react-bootstrap';

export default({
    onAdd,
    onClose,
    isShown
}) => {
    let firstName,
        lastName,
        position;

    return (
        <div>
            <Modal
              show = {isShown}
              onHide = {onClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Add teacher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        type = 'text'
                        placeholder = 'Last name...'
                        ref = {node => lastName = node}/>
                    <Input
                        type = 'text'
                        placeholder = 'First name...'
                        ref = {node => firstName = node}/>
                    <Input
                        type = 'text'
                        placeholder = 'Position...'
                        ref = {node => position = node}/>
                </Modal.Body>
              <Modal.Footer>
                <Button
                    onClick = {() => {
                        onAdd({
                            lastName: lastName.getValue(),
                            firstName: firstName.getValue(),
                            position: position.getValue()});
                    }}>
                    Add
                </Button>
                <Button onClick = {onClose}>Cancel</Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
};

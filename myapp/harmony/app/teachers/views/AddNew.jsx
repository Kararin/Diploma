import React from 'react';
import {
    Button,
    Input,
    Modal} from 'react-bootstrap';
import Select from '../../core/components/Select';
import TR from '../../translate/translate';

const AddNew = ({
    onAdd,
    onClose,
    isVisible,
    data,
    lang
}) => {
    var name = null,
        lastName = null,
        position = null,
        {teacherPositions} = data;
    return (
        <div className="static-modal">
            <Modal show = {isVisible}>
            <Modal.Header>
                <Modal.Title>
                    {TR(lang, 'ADD_NEW_TEACHERS')}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                 <Input
                    type = "text"
                    placeholder = {TR(lang, 'ENTER_TEACHER_NAME')}
                    label = {TR(lang, 'NAME')}
                    ref = {(c) => {name = c;}} />
                <Input
                    type = "text"
                    placeholder = {TR(lang, 'ENTER_TEACHER_LAST_NAME')}
                    label = {TR(lang, 'LAST_NAME')}
                    ref = {(c) => {lastName = c;}}/>
                <Select
                    store = {teacherPositions}
                    ref = {(c) => {position = c;}}
                 />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick = {() => {onClose()}}>
                    Close
                </Button>
                <Button
                    bsStyle="primary"
                    onClick = {() => {
                        console.log(position);
                        onAdd({name: name.getValue(),
                            lastName: lastName.getValue(),
                            position: position.getValue()});
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
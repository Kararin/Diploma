import React from 'react';
import {
    Button,
    Input,
    Modal} from 'react-bootstrap';
import TR from '../../translate/translate';

export default class AddNew extends React.Component {
    render() {
        var name = null,
            shortName = null,
            {onAdd, onClose, isVisible, lang} = this.props;

        return (
            <div className="static-modal">
                <Modal show = {isVisible}>
                <Modal.Header>
                    <Modal.Title>
                        {TR(lang, 'ADD_NEW_POSITION')}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Input
                        type = "text"
                        placeholder = {TR(lang, 'ENTER_POSITION_NAME')}
                        label = {TR(lang, 'TEACHER_POSITIONS_NAME')}
                        ref = {(c) => {name = c;}}
                        onChange = {e => this.changeShortName(e.target.value, shortName)} />
                    <Input
                        type = "text"
                        placeholder = {TR(lang, 'ENTER_POSITION_SHORT_NAME')}
                        label = {TR(lang, 'SHORT_NAME')}
                        ref = {(c) => {shortName = c;}}
                        />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick = {() => {onClose()}}>
                        {TR(lang, 'CLOSE')}
                    </Button>
                    <Button
                        bsStyle="primary"
                        onClick = {() => {
                            onAdd({name: name.getValue(), shortName: shortName.getValue()});
                        }}>
                        {TR(lang, 'OK')}
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
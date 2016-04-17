import React from 'react';
import {Button, Glyphicon, Input} from 'react-bootstrap';

export default class Row extends React.Component {
    render() {
        var {teacher} = this.props;
        // var buttons = this.getButtons(),
        //     data = this.getCells();

        return (
            <tr>
                <td>
                    {teacher.name}
                </td>
                <td>
                    {teacher.lastName}
                </td>
                <td>
                    {teacher.position}
                </td>
            </tr>
        );
    }

    getButtons() {
        var buttons = [],
            {
                isEdit,
                isDelete,
                onDelete,
                editMode,
                position,
                toggleEditMode} = this.props;

        (isDelete && !editMode) && (buttons.push(
            <Button key = {1} onClick = {() => onDelete(position)}>
                <Glyphicon glyph='remove'/>
            </Button>));

        (isEdit && !editMode) && (buttons.push(
            <Button key = {2} onClick = {() => toggleEditMode(position.id)}>
                <Glyphicon glyph='edit'/>
            </Button>));

        (editMode) && (buttons.push(
            <Button key = {3} onClick = {() => {this.onEditButtonClick(position)}}>
                <Glyphicon glyph='ok'/>
            </Button>));

        return buttons;
    }

    onEditButtonClick(position) {
        var {
            toggleEditMode,
            onEdit
        } = this.props;

        onEdit({
            _id: position._id,
            id: position.id,
            name: this.nameInput.getValue(),
            shortName: this.shortNameInput.getValue()
        });
        toggleEditMode(position.id);
    }

    getCells() {
        var {
            editMode,
            teacher
        }  = this.props,
            name,
            shortName,
            position
            cells = [];


        name = editMode ?
            <Input
                type = "text"
                defaultValue = {teacher.name}
                ref = {c => this.nameInput = c}/> :
            teacher.name;


        shortName = editMode ?
            <Input
                type = "text"
                defaultValue = {teacher.shortName}
                ref = {c => this.shortNameInput = c}/> :
            teacher.shortName;

        position = editMode ?
            <Input
                type = "text"
                defaultValue = {teacher.position}
                ref = {c => this.shortNameInput = c}/> :
            teacher.position;

        cells.push(
            <td key = {1}>
                {name}
            </td>);

        cells.push(
            <td key = {2}>
                {shortName}
            </td>);

        cells.push(
            <td key = {2}>
                {position}
            </td>);


        return cells;
    }

};

Row.defaultProps = {
    teacher: {},
    isDelete: false,
    onDelete: console.log('onDelete not implemented'),
    isEdit: false,
    beginEdit: console.log('beginEdit not implemented'),
    onEdit: console.log('onEdit not implemented'),
    toggleEditMode: console.log('onEdit not implemented'),
    editMode: false
};

Row.propTypes = {
    teacher: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    isDelete: React.PropTypes.bool,
    editMode: React.PropTypes.bool,
    isEdit: React.PropTypes.bool,
    beginEdit: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    toggleEditMode: React.PropTypes.func
};
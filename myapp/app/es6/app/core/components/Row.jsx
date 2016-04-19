import React from 'react';
import {Button, Glyphicon, Input} from 'react-bootstrap';

class ButtonRow extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };

        this.newModel = {};
    }

    render () {
        var rowData = this.getCells(),
            buttons = this.getButtons();

        return (
            <tr>
                {rowData}
                <td>
                    <div>
                    {buttons}
                    </div>
                </td>
            </tr>
        )
    }

    getButtons() {
        var buttons = [],
            {
                isEdit,
                isDelete,
                onDelete
            } = this.props,
            {editMode} = this.state;

        (isDelete && !editMode) && (buttons.push(
            <Button key = {1} onClick = {() => onDelete()}>
                <Glyphicon glyph='remove'/>
            </Button>));

        (isEdit && !editMode) && (buttons.push(
            <Button key = {2} onClick = {() => this.setEditMode(true)}>
                <Glyphicon glyph='edit'/>
            </Button>));

        (editMode) && (buttons.push(
            <Button key = {3} onClick = {() => {this.onEditButtonClick()}}>
                <Glyphicon glyph='ok'/>
            </Button>));

        return buttons;
    }

    getCells() {
        var {propsToShow}  = this.props,
            cells = propsToShow.map((item, index) => {
                var value = this.getCellValue(item);
                return (
                    <td key = {index}>
                        {value}
                    </td>);
            });

        return cells;
    }

    getCellValue(propName) {
        var {editMode} = this.state,
            {model} = this.props,
            result = editMode ?
            <Input
                type = 'text'
                ref = {c => this.newModel[propName] = c}
                defaultValue = {model[propName]}/> :
            model[propName];

        return result;
    }

    setEditMode(mode) {
        this.setState({
            editMode: mode
        });
    }

    onEditButtonClick() {
        var {onEdit, model, propsToShow} = this.props;

         propsToShow.forEach(name => {
             model[name] = this.newModel[name].getValue();
         });

        this.setEditMode(false);
        onEdit(model);
    }
}

ButtonRow.defaultProps = {
    isDelete: false,
    onDelete: console.log('onDelete not implemented'),
    isEdit: false,
    onEdit: console.log('onEdit not implemented'),
    model: {},
    propsToShow: []
};

ButtonRow.propTypes = {
    onDelete: React.PropTypes.func,
    isDelete: React.PropTypes.bool,
    isEdit: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    model: React.PropTypes.object,
    propsToShow: React.PropTypes.array
};


export default ButtonRow;
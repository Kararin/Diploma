import React from 'react';
import BaseRow from '../../core/components/Row';
import Select from '../../core/components/Select';

export default class Row extends BaseRow {
    getCellValue(propName) {
        var value = (propName !== 'position') ? super.getCellValue(propName): this.getPositionCell(propName);

        return value;
    }

    getPositionCell(propName) {
        var {editMode} = this.state,
            {model, teacherPositions} = this.props,
            positionValue = this.getPositionById(model[propName]);

        return editMode ?
            <Select
                store = {teacherPositions}
                ref = {c => this.newModel[propName] = c}
                defaultValue = {positionValue}/> :
            positionValue;
    }

    getPositionById(id) {
        var {teacherPositions} = this.props,
            result = teacherPositions.find(item => item.id === +id);

        return result && result.name;
    }
}

Row.defaultProps = {
    model: {},
    isDelete: false,
    onDelete: console.log('onDelete not implemented'),
    isEdit: false,
    beginEdit: console.log('beginEdit not implemented'),
    onEdit: console.log('onEdit not implemented'),
    toggleEditMode: console.log('onEdit not implemented'),
    editMode: false,
    teacherPositions: []
};
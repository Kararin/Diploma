import React from 'react';
import SubCell from '../containers/SubCell';
import APP from '../../utils/AppObject';

class Cell extends React.Component {
    render () {
        var znCell = this.getZhSubCell(),
            chCell = this.getChSubCell(),
            commonSubCell = this.getCommonSubCell();

        return (
            <td>
                {chCell}
                {znCell}
                {commonSubCell}
            </td>
        )
    }

    getZhSubCell() {
        var {
            values,
            teacherId,
            dayId
        } = this.props;

        return values.ch !== values.zn && (APP.isDefined(values.zn) || APP.isDefined(values.ch)) ?
            <SubCell
                teacherId = {teacherId}
                dayId = {dayId}
                type = 'zn'
                value = {values.zn}
            /> : null;
    }

    getChSubCell() {
        var {
            values,
            teacherId,
            dayId
        } = this.props;

        return values.ch !== values.zn && (APP.isDefined(values.ch) || APP.isDefined(values.zn))?
            <SubCell
                teacherId = {teacherId}
                dayId = {dayId}
                type = 'ch'
                value = {values.ch}
            /> : null;
    }

    getCommonSubCell() {
        var {
            values,
            teacherId,
            dayId
        } = this.props;

        return values.ch === values.zn && (APP.isDefined(values.ch) || APP.isDefined(values.zn))?
            <SubCell
                teacherId = {teacherId}
                dayId = {dayId}
                value = {values.ch}
            /> : null;
    }
}

Cell.defaultProps = {
    teacherId: -1,
    dayId: -1,
    values: {
        ch: '',
        zn: ''
    }
};

export default Cell;
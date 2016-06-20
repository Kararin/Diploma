import React from 'react';
import SubCell from '../containers/SubCell';
import APP from '../../utils/AppObject';
import {Button, Glyphicon} from 'react-bootstrap';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDividedButtonShow: this.showDevideButton(props.values, props.teacherId)
        };
    }

    showDevideButton(types, teacherId) {
        // return types.ch === types.zn && APP.isDefined(types.ch) && APP.isDefined(types.zn);
        return APP.isDefined(teacherId) && (types.ch === types.zn);
    }

    render () {
        var znCell = this.getZhSubCell(),
            chCell = this.getChSubCell(),
            commonSubCell = this.getCommonSubCell(),
            divideButton = this.getDivideButton();

        return (
            <td>
                {divideButton}
                {chCell}
                {znCell}
                {commonSubCell}
            </td>
        )
    }

    divideCell() {
        this.setState({
            isDividedButtonShow: false
        });
    }

    getZhSubCell() {
        var {
            values,
            teacherId,
            dayId
        } = this.props, {
            isDividedButtonShow
        } = this.state;


        return APP.isDefined(teacherId) && !isDividedButtonShow ?
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
        } = this.props, {
            isDividedButtonShow
        } = this.state;

        return APP.isDefined(teacherId) && !isDividedButtonShow ?
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
        } = this.props, {
            isDividedButtonShow
        } = this.state;


        return isDividedButtonShow ?
            <SubCell
                teacherId = {teacherId}
                dayId = {dayId}
                value = {APP.isDefined(values.ch) ? values.ch: ''}
            /> : null;
    }

    getDivideButton() {
        var {
            isDividedButtonShow
        } = this.state;


        return !isDividedButtonShow ? null :
            <Button className = 'divide-button'
                onClick = {() => {this.divideCell()}}>
                <Glyphicon glyph="minus"/>
            </Button>
        ;
    }
}

Cell.defaultProps = {
    teacherId: null,
    dayId: -1,
    values: {
        ch: '',
        zn: ''
    }
};

export default Cell;
'use strict';
require('node-jsx').install({extension: '.jsx'});

var React = require('react');

class Cell extends React.Component{
    render () {
        var value = this.getCellValue();
        return (
            <td>
                {value}
            </td>
        );
    }

    getCellValue() {
        var teacher = this.props.schedule.teachers.find(item => item.id === this.props.teacher.id),
            day,
            values;

            teacher && (day = teacher.days.find(item => item.id === this.props.dayId));
            day && (values = [
                day.ch ? day.ch.join(''): '',
                day.zn ? day.zn.join(''): ''
            ]);

        return values ? values.join(''): '';
    }
 };

Cell.defaultProps = {
    schedule: {},
    teacher: {},
    dayId: null
};

module.exports = Cell;
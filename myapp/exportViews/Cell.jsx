'use strict';
require('node-jsx').install({extension: '.jsx'});

var React = require('react');

class Cell extends React.Component{
    render () {
        var commonCell = this.getCommonCell();
        return (
            <td>
                {commonCell}
            </td>
        );
    }

    getCommonCell() {
        var chValue = this.getCellValue('ch'),
            znValue = this.getCellValue('zn');

        return chValue === znValue ? chValue :
            <div>
                <div style = {{
                    border: '1px solid'
                }}>
                    {chValue}
                </div>
                <div style = {{
                    border: '1px solid'
                }}>
                    {znValue}
                </div>
            </div>

    }

    getCellValue(type) {
        var teacher = this.props.schedule.teachers.find(item => item.id === this.props.teacher.id),
            day,
            values;

            teacher && (day = teacher.days.find(item => item.id === this.props.dayId));

        return day ? day[type].join('') : null;
    }
 };

Cell.defaultProps = {
    schedule: {},
    teacher: {},
    dayId: null
};

module.exports = Cell;
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
            znValue = this.getCellValue('zn'),
            style = {
                border: '1px solid white',
                margin: '0 -15px 0 -15px',
                width: '160px'
            };

        return chValue === znValue ? chValue :
            <div>
                <div style = {Object.assign({}, style, {
                    'marginTop': '-15px'
                })}>
                    {chValue}
                </div>
                <div style = {Object.assign({}, style, {
                    'marginBottom': '-15px'
                })}>
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
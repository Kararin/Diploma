'use strict';
require('node-jsx').install({extension: '.jsx'});

var React = require('react'),
    Cell = require('./Cell');

class Row extends React.Component {
    render () {
        var teacher = this.props.teacher,
            days = this.props.days;
        return (
            <tr>
                <td className = 'time'>
                    {this.props.teacher.name}
                </td>
                {days.map(item => (
                    <Cell
                        key = {item.id}
                        teacher = {teacher}
                        dayId = {item.id}
                        schedule = {this.props.schedule}
                    />
                ))}
            </tr>
        )
    }
};

Row.defaultProps = {
    teacher: {},
    schedule: {},
    days: []
};

module.exports = Row;
'use strict';
require('node-jsx').install({extension: '.jsx'});

var React = require('react'),
    GridHeader = require('./GridHeader'),
    Row = require('./Row');

class TableBody extends React.Component {
    render() {
        console.log('grid body');
        return (
            <tbody>
                <GridHeader days = {this.props.days}/>

                {this.props.teachers.map(item => {
                    return (
                        <Row
                            key = {item.id}
                            teacher = {item}
                            days = {this.props.days}
                            schedule = {this.props.schedule}
                        />
                    )
                })}
            </tbody>
        )
    }
};

TableBody.defaultProps = {
    teachers: [],
    days: [],
    schedule: {}
};

module.exports = TableBody;
'use strict';
require('node-jsx').install({extension: '.jsx'});

var React = require('react'),
    GridBody = require('./GridBody');

class Grid extends React.Component {
    render() {
        return (
            <div style = {{margin: 'auto'}}>
                <table>
                    <GridBody
                        schedule = {this.props.schedule}
                        days = {this.props.days}
                        teachers = {this.props.teachers}
                    />
                </table>
            </div>
        )
    }
}

Grid.defaultProps = {
    schedule: {},
    teachers: [],
    days: []
};

module.exports = Grid;
import React from 'react';

export default class Option extends React.Component {
    render() {
        var {value, eventKey} = this.props;

        return (
            <option
                value = {eventKey}
                >
                {value}
            </option>
        )
    }
}

Option.defaultProps = {
    value: '',
    eventKey: ''
};
import React from 'react';
import {Button} from 'react-bootstrap';

export default class Export extends React.Component {
    render() {
        var {
            actions,
            data
        } = this.props;
        return (
            <div>
                <Button onClick = {e => {actions.toHtml(data.scheduleId, data.dates)}}>
                    To HTML
                </Button>
            </div>
        )
    }
}

Export.defaultProps = {
    actions: {
        toHtml: console.log('toHtml not implemented')
    },
    data: {
        scheduleId: null,
        dates: {
            start: null,
            end: null
        }
    }
};
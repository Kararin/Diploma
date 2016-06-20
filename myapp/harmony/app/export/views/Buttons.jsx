import React from 'react';
import {Button} from 'react-bootstrap';
import TR from '../../translate/translate';

export default class Export extends React.Component {
    render() {
        var {
            actions,
            data
        } = this.props;
        return (
            <div>
                <Button onClick = {e => {actions.toHtml(data.scheduleId, data.dates)}}>
                    {TR(data.lang, 'TO_HTML')}
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
        lang: null,
        dates: {
            start: null,
            end: null
        }
    }
};
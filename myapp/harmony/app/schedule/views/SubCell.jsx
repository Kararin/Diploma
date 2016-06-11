import React from 'react';
import {Input, Panel} from 'react-bootstrap';

export default class SubCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };
    }

    render() {
        var {
            value,
            type,
            allowChange} = this.props.data;

        return (
            this.state.edit && allowChange ?
                <Input type = 'text'
                        defaultValue = {value}
                        onKeyDown = {e => {
                            (e.keyCode === 13) &&
                            (this.onEdit(e.target.value))
                        }}
                 /> :
                <div
                    className = {type? type : 'baseCell'}
                    onClick = {e => this.changeEditMode(true)}>
                    {value}
                </div>
        )
    }

    changeEditMode(value) {
        this.setState({
            edit: value
        });
    }

    onEdit(timeValue) {
        var {
            data, actions
        } = this.props,
            scheduleData = {
                teacherId: data.teacherId,
                value: timeValue,
                dayId: data.dayId,
                type: data.type,
                current: data.current
            }

        if (this.validateTime(timeValue)) {
            scheduleData.value = this.fixTimaValue(scheduleData.value);
            actions.editAction(scheduleData);
        }


        this.changeEditMode(false);
    }

    validateTime(time) {
        var validInput = [
                /\d\d:\d\d/,
                /\d:\d\d/,
                /(\d|\d\d)/,
                /^$/
            ],
            timeWithoutSpaces = time.trim(),
            validResults = validInput.map(item => {
               return item.test(timeWithoutSpaces)
            }),
            result = validResults.some(item => item);

        return result;
    }

    fixTimaValue(time) {
        var withoutChanges = /\d:\d\d|\d\d:\d\d/,
            needsChanges = /(\d|\d\d)/;

        return withoutChanges.test(time) ? time
                : needsChanges.test(time) ? `${time}:00` : '';
    }
}

SubCell.defaultProps = {
    data: {
        value: '',
        teacherId: -1,
        dayId: -1,
        type: '',
        schedule: [],
        current: null,
        allowChange: true
    },
    actions: {
        addAction: console.log('addAction not implemented'),
        editAction: console.log('editAction not implemented')
    }
}
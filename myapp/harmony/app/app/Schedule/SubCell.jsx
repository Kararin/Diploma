import React from 'react';
import {Input} from 'react-bootstrap';

export default class SubCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };
    }

    render() {
        var {value, type} = this.props.data;

        return (
            this.state.edit ?
                <Input type = 'text'
                        defaultValue = {value}
                        onKeyDown = {e => {
                            (e.keyCode === 13) &&
                            (this.onEdit(e.target.value))
                        }}
                 /> :
                <div
                    className = {type}
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
}

SubCell.defaultProps = {
    data: {
        value: '',
        teacherId: -1,
        dayId: -1,
        type: '',
        schedule: [],
        current: null,
        newItem: console.log('newItem not implemented')
    },
    actions: {
        addAction: console.log('addAction not implemented'),
        editAction: console.log('editAction not implemented')
    }
}
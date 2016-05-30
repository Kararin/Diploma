import React from 'react';
import '../../../css/_teachers.scss';

export const CloseItem = ({
    data = {
        id,
        fullName
    },
    actions = {
        onClickAction
    }
}) => (
    <div className = 'item-delete'>
        <button onClick = {e => {
            e.preventDefault();
            actions.onClickAction(data.id)
        }}>&times;</button>

        <div
            className = 'content'
            onClick = {e => actions.removeFromSchedule(data.id)}>{data.fullName}</div>
    </div>
)

CloseItem.defaultProps = {
    data: {
        id: null,
        fullName: ''
    },
    actions: {
        onClickAction: console.log('onClickAction not implemented')
    }
}

export default CloseItem;
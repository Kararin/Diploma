import React from 'react';
import Cell from '../containers/Cell';
const Row = ({data, actions}) => (
    <tr>
        <td onClick = {e => actions.removeFromSchedule(data.teacher.id)}>
            {data.teacher.displayName}
        </td>
        {data.days.map(item => (
            <Cell
                key = {item.id}
                teacherId = {data.teacher.id}
                dayId = {item.id}
            />
        ))}
    </tr>
);

Row.defaultProps = {
    data: {
        teacher: {
            id: -1,
            displayName: ''
        },
        days: []
    },
    actions: {
        removeFromSchedule: console.log('removeFromSchedule not implemented')
    }
};

export default Row;
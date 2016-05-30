import React from 'react';
import Cell from '../containers/Cell';
import Teacher from '../../teachers/containers/ItemWithClose';

const Row = ({data, actions}) => (
    <tr>
        <td>
            <Teacher
                fullName = {data.teacher.displayName}
                id = {data.teacher.id}
            />
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
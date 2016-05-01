import React from 'react';
import Cell from './containers/Cell';
const Row = ({data}) => (
    <tr>
        <td>
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
        }
    },
    days: []
};

export default Row;
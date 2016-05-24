import React from 'react';
import SubCell from '../containers/SubCell';

const Cell = ({
    data
}) => (
    <td>
       <SubCell
            teacherId = {data.teacherId}
            dayId = {data.dayId}
            type = 'ch'
        />
        <SubCell
            teacherId = {data.teacherId}
            dayId = {data.dayId}
            type = 'zn'
        />
    </td>
);

Cell.defaultProps = {
    data: {
        teacherId: -1,
        dayId: -1
    }
};

export default Cell;
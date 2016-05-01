import React from 'react';
import SubCell from './containers/SubCell';

const Cell = ({
    data
}) => (
    <td>
       <SubCell
            teacherId = {data.teacherId}
            dayId = {data.dayId}
            value = {data.values.ch}
            type = 'ch'
        />
        <SubCell
            teacherId = {data.teacherId}
            dayId = {data.dayId}
            value = {data.values.zn}
            type = 'zn'
        />
    </td>
);

Cell.defaultProps = {
    data: {
        teacherId: -1,
        dayId: -1,
        values: {
            ch: '',
            zn: ''
        }
    }
};

export default Cell;
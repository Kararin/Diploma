import React from 'react';
import SubCell from '../containers/SubCell';


class Cell extends React.Component {
    render () {
        var data = this.props.data;
        return (
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
        )
    }

    isChVasible() {

    }
}

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
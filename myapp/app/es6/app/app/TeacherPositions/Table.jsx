import React from 'react';
import Row from "teacherPositions/Row";
import TableComponent from 'components/Table';

class Table extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <TableComponent>
                <thead>
                    <tr>
                        <th className = 'mdl-data-table__cell--non-numeric'>Name</th>
                        <th className = 'mdl-data-table__cell--non-numeric'>Short ame</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => <Row
                                                        position = {item}
                                                        key = {item.id}/>)}
                </tbody>
            </TableComponent>
        );
    }
}

Table.defaultProps = {
    positions: [],
    getData: console.log(' getdata not implemented yet')
};

export default Table;
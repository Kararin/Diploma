import React from 'react';
import Row from "teacherPositions/container/Row";
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
                        <th className = 'mdl-data-table__cell--non-numeric'>Short name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => <Row
                                                        position = {item}
                                                        key = {item.id}
                                                        onEdit = {this.props.editing.has(item.id)}/>)}
                </tbody>
            </TableComponent>
        );
    }
}

Table.defaultProps = {
    positions: [],
    editing: new Set(),
    getData: console.log(' getdata not implemented yet')
};

export default Table;
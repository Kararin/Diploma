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
                        <th>Name</th>
                        <th>Short ame</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => <Row {...item}/>)}
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
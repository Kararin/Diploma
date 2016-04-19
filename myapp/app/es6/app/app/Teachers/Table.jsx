import React from 'react';
import {Table} from 'react-bootstrap';
import Row from './Row';
import {Set} from 'immutable';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <Table className = "my-table">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Last name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.teachers.map(item => <Row key = {item.id}
                                                        teacher = {item}
                                                        isDelete = {true}
                                                       />
                                                       )}
                </tbody>
            </Table>
        );
    }
}

TableComponent.defaultProps = {
    teachers: [],
    editing: new Set(),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;

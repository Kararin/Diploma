import React from 'react';
import {Table} from 'react-bootstrap';
import Row from './containers/Row';
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
                        <th>Short name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => <Row
                                                        key = {item.id}
                                                        position = {item}
                                                        isDelete = {true}
                                                        isEdit = {true}
                                                        editMode = {this.props.editing.has(item.id)}
                                                       />
                                                       )}
                </tbody>
            </Table>
        );
    }
}

TableComponent.defaultProps = {
    positions: [],
    editing: new Set(),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;
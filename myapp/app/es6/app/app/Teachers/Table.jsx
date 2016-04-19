import React from 'react';
import {Table} from 'react-bootstrap';
import Row from '../../core/components/Row';
import {Set} from 'immutable';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        var {onDelete, onEdit} = this.props;
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
                                                        model = {item}
                                                        isDelete = {true}
                                                        isEdit = {true}
                                                        propsToShow = {['name', 'lastName', 'position']}
                                                        onDelete = {() => {onDelete(item)}}
                                                        onEdit = {onEdit}
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
    onDelete: console.log('onDelete not implemented'),
    onEdit: console.log('onEdit not implemented'),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;

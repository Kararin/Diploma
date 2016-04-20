import React from 'react';
import {Table} from 'react-bootstrap';
import Row from '../../core/components/Row';

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
                        <th>Short name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => (
                        <Row
                            key = {item.id}
                            isDelete = {true}
                            onDelete = {() => onDelete(item)}
                            onEdit = {onEdit}
                            isEdit = {true}
                            model = {item}
                            propsToShow = {['name', 'shortName']}
                            >
                        </Row>)
                     )}
                </tbody>
            </Table>
        );
    }
}

TableComponent.defaultProps = {
    positions: [],
    onDelete: console.log('onDelete not implemented'),
    onEdit: console.log('onEdit not implemented'),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;
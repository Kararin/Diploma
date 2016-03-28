import React from 'react';
import {Table} from 'react-bootstrap';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Short name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.positions.map(item => <tr
                                                        position = {item}
                                                        key = {item.id}
                                                        />)}
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
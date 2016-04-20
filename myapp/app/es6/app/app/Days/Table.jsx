import React from 'react';
import {Table} from 'react-bootstrap';

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
                    </tr>
                </thead>
                <tbody>
                    {this.props.days.map(item => (
                        <tr key = {item.id}>
                            <td>{item.name}</td>
                        </tr>
                        )
                     )}
                </tbody>
            </Table>
        );
    }
}

TableComponent.defaultProps = {
    days: [],
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;
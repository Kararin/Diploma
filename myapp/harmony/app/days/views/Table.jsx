import React from 'react';
import {Table} from 'react-bootstrap';
import TR from '../../translate/translate';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        var {lang} = this.props;

        return (
            <Table className = "my-table">
                <thead>
                    <tr>
                        <th>{TR(lang, 'DAYS_NAME')} </th>
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
    getData: console.log(' getdata not implemented yet'),
    lang: null
};

export default TableComponent;
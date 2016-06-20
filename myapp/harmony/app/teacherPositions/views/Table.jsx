import React from 'react';
import {Table} from 'react-bootstrap';
import Row from '../../core/components/Row';
import TR from '../../translate/translate';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        var {onDelete, onEdit, lang} = this.props;
        return (
            <Table className = "my-table">
                <thead>
                    <tr>
                        <th>{TR(lang, 'TEACHER_POSITIONS_NAME')} </th>
                        <th>{TR(lang, 'SHORT_NAME')}</th>
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
    lang: null,
    onDelete: console.log('onDelete not implemented'),
    onEdit: console.log('onEdit not implemented'),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;
import React from 'react';
import {Table} from 'react-bootstrap';
import Row from '../containers/Row';
import {Set} from 'immutable';
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
                        <th>{TR(lang, 'NAME')} </th>
                        <th>{TR(lang, 'LAST_NAME')}</th>
                        <th>{TR(lang, 'POSITION')}</th>
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
    lang: null,
    editing: new Set(),
    onDelete: console.log('onDelete not implemented'),
    onEdit: console.log('onEdit not implemented'),
    getData: console.log(' getdata not implemented yet')
};

export default TableComponent;

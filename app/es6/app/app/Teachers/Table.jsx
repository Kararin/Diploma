import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableBody from 'material-ui/lib/table/table-body';
import Row from './TableRow';
import Teachers from './Teachers';

const TeacherTable =  ({
    teachers,
    onTeacherSelected
}) => (
 <Table striped = {true} bordered = {true}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John Smith</td>
        <td>Employed</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Randal White</td>
        <td>Unemployed</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Stephanie Sanders</td>
        <td>Employed</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Steve Brown</td>
        <td>Employed</td>
      </tr>
    </tbody>
  </Table>
)

TeacherTable.defaultProps = {
    teachers: new Teachers(),
    onTeacherSelected: () => console.log('not implemented')
}

TeacherTable.propTypes = {
    teachers: PropTypes.object,
    onTeacherSelected: PropTypes.func
}

export default TeacherTable;

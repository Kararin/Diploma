import React, {PropTypes} from 'react';
import Row from './TableRow';
import Teachers from './Teachers';
import Table from 'components/Table';
import Th from 'components/Header';

const TeacherTable =  ({
    teachers,
    onTeacherSelected
}) => {
  return (
  <Table>
    <thead>
      <tr>
        <Th>
          Last Name
        </Th>
        <Th>
          Name
        </Th>
        <Th>
          Position
        </Th>
      </tr>
    </thead>
    <tbody>
      {teachers.array.map(teacher => <Row {...teacher} onClick = {onTeacherSelected}/>)}
    </tbody>
  </Table>
  );
}

TeacherTable.defaultProps = {
    teachers: new Teachers(),
    onTeacherSelected: () => console.log('not implemented')
}

TeacherTable.propTypes = {
    teachers: PropTypes.object,
    onTeacherSelected: PropTypes.func
}

export default TeacherTable;

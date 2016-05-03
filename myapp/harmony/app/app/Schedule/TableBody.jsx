import React from 'react';
import Row from './containers/Row';

const TableBody = ({
    teachers
}) => (
  <tbody>
    {teachers.map(item => (
        <Row
            key = {item.id}
            teacher = {item}/>
    ))}
  </tbody>
);

export default TableBody;
//TODO: creatr custom tr
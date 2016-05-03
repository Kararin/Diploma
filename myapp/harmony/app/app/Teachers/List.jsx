import React from 'react';
import {ListGroup} from 'react-bootstrap';
import ListItem from './containers/ListItem';

export default ({
    teachers
}) => (
    <ListGroup>
        {teachers.map(teacher => (
            <ListItem
                teacher = {teacher}
                key = {teacher.id}
            />
        ))}
    </ListGroup>
)
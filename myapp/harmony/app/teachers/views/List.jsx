import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListItem from '../containers/ListItem';

export default ({
    teachers
}) => (
    <ListGroup>
        <ListGroupItem
            className = 'teachers-list-header'
            >
            Teahers:
        </ListGroupItem>
        {teachers.map(teacher => (
            <ListItem
                teacher = {teacher}
                key = {teacher.id}
            />
        ))}
    </ListGroup>
)
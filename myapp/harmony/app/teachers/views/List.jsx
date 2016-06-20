import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListItem from '../containers/ListItem';
import TR from '../../translate/translate';

export default ({
    teachers,
    lang
}) => (
    <ListGroup>
        <ListGroupItem
            className = 'teachers-list-header'
            >
            {TR(lang, 'TEACHERS')}:
        </ListGroupItem>
        {teachers.map(teacher => (
            <ListItem
                teacher = {teacher}
                key = {teacher.id}
            />
        ))}
    </ListGroup>
)
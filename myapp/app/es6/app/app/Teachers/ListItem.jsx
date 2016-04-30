import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const ListItem = ({
    teacher,
    actions
}) => (
    <ListGroupItem
        onClick = {e => {actions.addToSchedule(teacher.id)}}>
        {teacher.displayData}
    </ListGroupItem>
)

ListItem.defaultProps = {
    teacher: {
        displayData: '',
        id: -1
    },
    actions: {
        addToSchedule: console.log('addToSchedule not implemented')
    }
};

export default ListItem;

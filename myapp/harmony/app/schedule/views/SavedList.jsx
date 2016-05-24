import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const SavedList = ({
    data,
    actions
}) => (
    <ListGroup>
        <ListGroupItem
            className = 'teachers-list-header'
        >
            Saved schedules:
        </ListGroupItem>
        {data.store.map(item => (
            <ListGroupItem
                key = {item.id}
                onClick = {e => actions.onClickAction(item.id)}>
                {item.name}, {item.date}


            </ListGroupItem>
        ))}
    </ListGroup>
)

SavedList.defaultProps = {
    data: {
        store: []
    },
    actions: {
        onClickAction: console.log('onClickAction not implemented')
    }
};

export default SavedList;
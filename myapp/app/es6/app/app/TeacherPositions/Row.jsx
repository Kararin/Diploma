import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

const Row = ({
    position,
    actions,
    onDelete,
    isEdit,
    beginEdit,
    onEdit
}) => (
    <tr>
        <td>{position.name}</td>
        <td>{position.shortName}</td>
        <td>
            <Button>
                <Glyphicon glyph="edit"/>
            </Button>
        </td>
        <td>
            <Button onClick = {() => {onDelete(position);}}>
                <Glyphicon glyph="remove"/>
            </Button>
        </td>
    </tr>
);

//TODO: default props
export default Row;
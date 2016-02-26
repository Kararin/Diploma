import React from 'react';
import TD from 'components/Td';
import Button from 'components/MiniFabButton';

//TODO: add buttons
//TODO: add style if needed
const Row = ({
    position,
    actions,
    onDelete,
    isEdit,
    beginEdit,
    onEdit
}) => (
    <tr>
        <TD>
            {(isEdit)? <input>position.name</input>: position.name}
        </TD>
        <TD>
            {(isEdit)? <input>position.shortName</input>: position.shortName}
        </TD>
        <TD>
            <Button onClick = {() => {onDelete(position)}}
                    icon = 'delete'/>
            {(isEdit)?
                    <Button
                        onClick = {() => onEdit(position.id)}
                        icon = 'ok'/>
                    :
                    <Button onClick = {() => beginEdit(position.id)}
                    icon = 'edit'/>}
        </TD>
    </tr>
);

//TODO: default props
export default Row;
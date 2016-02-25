import React from 'react';
import TD from 'components/Td';

//TODO: add buttons
//TODO: add style if needed
const Row = ({
    position,
    actions
}) => (
    <tr>
        <TD>{position.name}</TD>
        <TD>{position.shortName}</TD>
    </tr>
);

export default Row;
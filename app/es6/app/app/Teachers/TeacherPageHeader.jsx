import React from 'react';
import {Button} from 'react-bootstrap';


export default ({
    onAddShow
}) => (
    <div className = 'top-buttons'>
        <Button onClick = {onAddShow}>
            Add
        </Button>
    </div>
);
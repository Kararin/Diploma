import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

export default class Row extends React.Component {
    render() {
        var {position, onDelete} = this.props;
        return (
            <tr>
                <td>
                    {position.name}
                </td>
                <td>
                    {position.shortName}
                </td>
                <td>
                    <Button onClick = {() => onDelete(position)}>
                        <Glyphicon glyph='remove'/>
                    </Button>
                </td>
            </tr>
        );
    }
};

Row.defaultProps = {
    position: {},
    onDelete: console.log('onDelete not implemented'),
    isEdit: false,
    beginEdit: console.log('beginEdit not implemented'),
    onEdit: console.log('onEdit not implemented')
};

Row.propTypes = {
    position: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    isEdit: React.PropTypes.bool,
    beginEdit: React.PropTypes.func,
    onEdit: React.PropTypes.func
};
import React from 'React';
import {PropTypes} from 'React';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

const Row =  ({
    id,
    lastName,
    firstName,
    position,
    onClick
}) => (
    <TableRow>
        <TableRowColumn>
            {id}
        </TableRowColumn>
        <TableRowColumn>
            {lastName}
        </TableRowColumn>
        <TableRowColumn>
            {firstName}
        </TableRowColumn>
    </TableRow>
)

Row.defaultProps = {
    id: undefined,
    lastName: '',
    firstName: '',
    position: '',
    onClick: () => console.log('not implemented')
};

Row.propTypes = {
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    position: PropTypes.string,
    onClick: PropTypes.func
};

export default Row;
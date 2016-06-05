import React from 'react';
import Row from '../containers/Row';

class TableBody extends React.Component {
    render() {
        var emptyRows = this.getEmptyRows();

        return (
            <tbody>
                {this.props.teachers.map(item => (
                    <Row
                        key = {item.id}
                        teacher = {item}/>
                ))}
                {emptyRows}
            </tbody>
        )
    }

    getEmptyRows() {
        var result = [],
            key = () => Date.now(),
            i;

        for (i = 0; i < this.props.emptyRowsCount; i++) {
            result.push(
                <Row key = {Date.now() + i}
                teacher = {{}}/>
            );
        }

        return result.length ? result: [];
    }
};

TableBody.defaultProps = {
    teacher: [],
    emptyRowsCount: 0
};

export default TableBody;
//TODO: creatr custom tr
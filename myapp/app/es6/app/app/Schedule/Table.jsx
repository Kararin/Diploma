import React from 'react';
import {Table} from 'react-bootstrap';
import TableHeader from './containers/TableHeader';
import TableBody from './containers/TableBody';

export default class Schedule extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                    <TableHeader/>
                </thead>
                <TableBody/>
            </Table>
        )
    }
}
import React from 'react';
import {
    Table,
    Grid,
    Col,
    Row,
    Button
} from 'react-bootstrap';
import TableHeader from './containers/TableHeader';
import TableBody from './containers/TableBody';
import ScheduleDates from './containers/ScheduleDates';

export default class Schedule extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <div className = 'schedule-button-panel '>
                        <Button className = 'button'>
                            Previous
                        </Button>
                        <Button className = 'button-center'>
                            Current
                        </Button>
                        <Button className = 'button'>
                            Next
                        </Button>
                    </div>
                </Row>
                <Row>
                    <ScheduleDates/>
                </Row>
                <Row>
                    <Table bordered className = "schedule-table">
                        <thead>
                            <TableHeader/>
                        </thead>
                        <TableBody/>
                    </Table>
                </Row>
            </Grid>
        )
    }
}
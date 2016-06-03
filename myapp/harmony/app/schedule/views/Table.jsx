import React from 'react';
import {
    Table,
    Grid,
    Col,
    Row,
    Button
} from 'react-bootstrap';
import TableHeader from '../containers/TableHeader';
import TableBody from '../containers/TableBody';
import ScheduleDates from '../containers/ScheduleDates';

export default class Schedule extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <div className = 'schedule-grid-panel'>
                        <div className = 'button-panel'>
                            <Button
                                onClick = {(e) => {
                                    var {toPrevWeek, currentDate} = this.props;

                                    toPrevWeek(currentDate);
                                }}>
                                Previous
                            </Button>
                            <Button
                                onClick = {(e) => {
                                    this.props.toCurrentWeek();
                                }}>
                                Current
                            </Button>
                            <Button
                                onClick = {(e) => {
                                    var {toNextWeek, currentDate} = this.props;

                                    toNextWeek(currentDate);
                                }}>
                                Next
                            </Button>
                        </div>
                        <div className = 'dates-panel'>
                            <ScheduleDates/>
                        </div>
                    </div>
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
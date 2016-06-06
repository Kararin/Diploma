import React from 'react';
import {
    Table,
    Grid,
    Col,
    Row,
    Button,
    Glyphicon
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
                                bsSize="large"
                                className = 'schedule-navigation-button'
                                onClick = {(e) => {
                                    var {toPrevWeek, currentDate} = this.props;

                                    toPrevWeek(currentDate);
                                }}>
                                <Glyphicon glyph="arrow-left" />
                            </Button>
                            <Button
                                className = 'schedule-navigation-button'
                                onClick = {(e) => {
                                    this.props.toCurrentWeek();
                                }}>
                                Current
                            </Button>
                            <Button
                                bsSize="large"
                                className = 'schedule-navigation-button'
                                onClick = {(e) => {
                                    var {toNextWeek, currentDate} = this.props;

                                    toNextWeek(currentDate);
                                }}>
                                <Glyphicon glyph="arrow-right" />
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
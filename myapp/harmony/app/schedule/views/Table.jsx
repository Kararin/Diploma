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
import TR from '../../translate/translate';

export default class Schedule extends React.Component {
    render() {
        var {lang} = this.props;

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
                                {TR(lang, 'CURRENT')}
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
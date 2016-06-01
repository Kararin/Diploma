import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TeacherList from '../../teachers/containers/List';
import Table from '../containers/Table';
import ExportButtons from '../../export/containers/Buttons';

export default class Page extends React.Component{
    componentDidMount() {
        this.props.fetchSchedule();
    }
    render() {
        return (
             <div className = 'my-schedule-page'>
                <Grid>
                    <Row>
                        <Col xs = {2} className = 'my-shedule-col'>
                            <TeacherList/>
                        </Col>
                        <Col xs = {6} className = 'my-shedule-col'>
                            <Table/>
                        </Col>
                        <Col xs = {2} className = 'my-shedule-col'>
                            <ExportButtons/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

Page.defaultProps = {
    fetchSchedule: console.log('fetchSchedule not implemented')
}
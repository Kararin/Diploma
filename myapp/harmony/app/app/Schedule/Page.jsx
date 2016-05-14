import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TeacherList from '../Teachers/containers/List';
import Table from './Table';
import SavedList from './containers/SavedList';

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
                            <SavedList/>
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
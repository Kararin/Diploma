import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TeacherList from '../Teachers/containers/List';
import Table from './Table';

export default class Page extends React.Component{
    componentDidMount() {
        this.props.fetchSchedule();
    }
    render() {
        return (
             <div>
                <Grid>
                    <Row>
                        <Col xs = {2}>
                            <TeacherList/>
                        </Col>
                        <Col xs = {6}>
                            <Table/>
                        </Col>
                        <Col xs = {4}>
                            saved
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
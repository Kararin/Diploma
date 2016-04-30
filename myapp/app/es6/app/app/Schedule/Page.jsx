import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TeacherList from '../Teachers/containers/List';
export default () => (
    <div>
        <Grid>
            <Row>
                <Col xs = {4}>
                    <TeacherList/>
                </Col>
                <Col xs = {6}>
                    schedule
                </Col>
            </Row>
        </Grid>
    </div>
)
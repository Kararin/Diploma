import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Positions from './app/TeacherPositions/containers/Page';
import Teachers from './app/Teachers/containers/Page';

export default () => {
    return (
        <Tabs defaultActiveKey = {1}
              bsStyle = 'tabs'>
            <Tab eventKey = {1} title="Teachers">
                <Teachers/>
            </Tab>
            <Tab eventKey = {2} title="Positions">
                <Positions/>
            </Tab>
        </Tabs>
);
}
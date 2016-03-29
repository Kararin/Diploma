import React from 'react';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'react-bootstrap';
import Positions from './app/TeacherPositions/Page';

export default () => {
    return (
        <Tabs defaultActiveKey = {2}
              bsStyle = 'tabs'>
            <Tab  eventKey={1} title="Teachers">Tab 1 content</Tab>
            <Tab eventKey={2} title="Positions">
                <Positions/>
            </Tab>
        </Tabs>
);
}